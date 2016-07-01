class TheatersController < ApplicationController

  def serve
    user_preference = current_user.preferred_tags.sample # AR Tag Object
    tracks = Track.get_content(user_preference) # Array containing Track objects

    current_tag = user_preference.description

    Yt.configure do |config|
      config.api_key = 'AIzaSyBow3JsuMYjKhpH9Pa_h4cEDIT5K4lYE9w'
    end

    def make_YT_embed_url(videoId)
      embed_url = 'https://www.youtube.com/embed/'
      # embed_preferences = '&amp;controls=0&amp;showinfo=0&autoplay=1'
      autoplay = '?autoplay=1'
      # embed_url + videoId + embed_preferences
      embed_url + videoId + autoplay
    end

    # video = Yt::Video.new id:  'iwew9TzWY3M'
    playlist = Yt::Playlist.new id: tracks.sample.source_id

    videos = {}
    videos["session_theme"] = current_tag
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

    if videos["playlistData"].length > 0
      render :json => videos
    else
      render :json => {video: 'invalid'}
    end
  end
end
