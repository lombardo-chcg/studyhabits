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

  # irb(main):047:0> pl.playlist_items.each do |x|
  # irb(main):048:1* p x.snippet.resourceId.videoId
  # irb(main):049:1> end

end
