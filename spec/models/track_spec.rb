require "rails_helper"

RSpec.describe Track, type: :model do
  describe Track do
    it { should have_many(:taggings) }
    it { should have_many(:tags) }
  end
end
