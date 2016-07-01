class TheatersController < ApplicationController

  def serve
    session_length = params[:session_length].to_i/1000
    user_preference = current_user.preferred_tags.sample # AR Tag Object
    tracks = Track.get_content(user_preference) # Array containing Track objects

    current_tag = user_preference.description

    Yt.configure do |config|
      config.api_key = 'AIzaSyBow3JsuMYjKhpH9Pa_h4cEDIT5K4lYE9w'
    end

    def make_YT_embed_url(videoId)
      embed_url = 'https://www.youtube.com/embed/'
      embed_preferences = '?controls=0?showinfo=0'
      autoplay = '?autoplay=1'
      # embed_url + videoId + embed_preferences
      embed_url + videoId + autoplay
    end

    # video = Yt::Video.new id:  'iwew9TzWY3M'
    playlist = Yt::Playlist.new id: tracks.sample.source_id

    videos = {}
    videos["currentSessionTheme"] = current_tag
    videos["playlistData"] = []

    total_content_length = 0

    playlist.playlist_items.each do |playlist_item|
      video = Yt::Video.new id: playlist_item.snippet.data['resourceId']['videoId']
      if total_content_length < session_length*2 && video_valid?(video)
        puts total_content_length
        total_content_length += video.duration.to_i
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

  private
   def params_session_length
     params.permit(:session_length,)
   end
end
