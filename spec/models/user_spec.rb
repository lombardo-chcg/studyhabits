require "rails_helper"

RSpec.describe User, type: :model do
  describe User do
    it { is_expected.to validate_presence_of(:username) }
    it { is_expected.to validate_presence_of(:password) }
    it { is_expected.to validate_presence_of(:email) }

    it { should have_many(:preferences) }
    it { should have_many(:preferred_tags) }
    it { should have_secure_password }
  end
end
