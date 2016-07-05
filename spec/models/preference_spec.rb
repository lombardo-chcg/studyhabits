require "rails_helper"

RSpec.describe Preference, type: :model do
  describe Preference do
    it { should belong_to(:user) }
    it { should belong_to(:tag) }
  end
end
