module VideoHelper
  def video_valid?(video)
    Yt.configure do |config|
      config.api_key = 'AIzaSyBow3JsuMYjKhpH9Pa_h4cEDIT5K4lYE9w'
    end

    valid = true
    failure_reasons = ["has_failed_conversion?","uses_unsupported_codec?","claimed?", "infringes_copyright?","duplicate?",
                        "too_long?","violates_terms_of_use?","inappropriate?", "infringes_trademark?","belongs_to_closed_account?",
                        "belongs_to_suspended_account?","empty?","invalid?","too_small?","aborted?"]
    failure_reasons.each do |reason|
      if video.send(reason) == true
        valid = false
      end
    end

    valid
  end
end
