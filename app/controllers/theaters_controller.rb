class TheatersController < ApplicationController

  def serve
    Yt.configure do |config|
      config.api_key = 'AIzaSyBow3JsuMYjKhpH9Pa_h4cEDIT5K4lYE9w'
    end
    # grab a video for the current user: @user = current_user
    video = Yt::Video.new id:  'iwew9TzWY3M'
    # make sure the video hasn't been deleted video.deleted?
    render :json => { video: {  videoId: video.id,
                                title: video.title,
                                duration: video.duration } }
  end

end
