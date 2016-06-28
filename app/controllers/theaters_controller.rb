class TheatersController < ApplicationController

  def serve
    Yt.configure do |config|
      config.api_key = 'AIzaSyBow3JsuMYjKhpH9Pa_h4cEDIT5K4lYE9w'
    end
    # grab a video for the current user: @user = current_user
    video = Yt::Video.new id:  'iwew9TzWY3M'
    if video_valid?(video)
      render :json => { video: {  videoId: video.id,
                                  title: video.title,
                                  duration: video.duration } }
    else
      render :json => {video: 'invalid'}
    end
  end

  # mozart string quartets
  # array = []
  # pl = Yt::Playlist.new id: 'PL-mSV3w33pTTEELPX-KFH2WjWlUFMYKcJ'
  # pl.playlist_items.each {|vid| array << vid.snippet.data['resourceId']['videoId']}

end
