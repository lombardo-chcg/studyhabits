class TheatersController < ApplicationController

  def serve
    Yt.configure do |config|
      config.api_key = 'AIzaSyBow3JsuMYjKhpH9Pa_h4cEDIT5K4lYE9w'
    end
    # grab a video for the current user: @user = current_user

    def make_YT_embed_url(videoId)
      embed_url = 'https://www.youtube.com/embed/'
      embed_preferences = '&amp;controls=0&amp;showinfo=0&autoplay=1'
      autoplay = '?autoplay=1'

      embed_url + videoId + embed_preferences
      embed_url + videoId + autoplay
    end

    video = Yt::Video.new id:  'iwew9TzWY3M'
    playlist = Yt::Playlist.new id: 'PL-mSV3w33pTTEELPX-KFH2WjWlUFMYKcJ' #mozart strings
    # playlist = Yt::Playlist.new id: 'PL6880827AEBBC2645' #mozart 

    videos = {}
    videos["playlistData"] = []

    playlist.playlist_items.each do |playlist_item|
      video = Yt::Video.new id: playlist_item.snippet.data['resourceId']['videoId']
      if video_valid?(video)
        videos["playlistData"] << { url: make_YT_embed_url(video.id),
                                    title: video.title,
                                    duration: video.duration }
      end
    end

    videos["playlistData"].shuffle!

    if videos["playlistData"].length > 1
      render :json => videos
    else
      render :json => {video: 'invalid'}
    end
  end

  # mozart string quartets
  # array = []
  # pl = Yt::Playlist.new id: 'PL-mSV3w33pTTEELPX-KFH2WjWlUFMYKcJ'
  # playlist.playlist_items.each {|vid| array << vid.snippet.data['resourceId']['videoId']}

# turn each playlist into a json object
# once the server sends the data
#   - change state to the first video in the list
#   - set a timeout based on the duration of that video
#   - when timeout reached, change the state of the video to the next video in the list
#   - while this is going on, have another timeout that redirects to a new page based on user input

end
