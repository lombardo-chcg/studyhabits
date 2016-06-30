class User < ActiveRecord::Base
  has_many :favings
  has_many :preferences
  has_many :preferred_tags, through: :preferences, source: :tag

  has_secure_password
  before_save   :downcase_email
  before_create :create_activation_token

  validates :username, :email, { presence: true, uniqueness: true }

  def get_token
    self.activation_token
  end

  def activated?
    self.activated
  end

  def get_preferences
    preferences = []
    if self.preferences.length > 0
      self.preferred_tags.each do |preference|
        preferences << preference.description
      end
    end
    preferences
  end

  def set_preferences(preferences_array)
    preferences_array.each do |preference|
      self.preferences.create(tag_id: Tag.find_by(sku: preference).id)
    end
  end

  private

  def create_activation_token
    self.activation_token = SecureRandom.urlsafe_base64
  end

  def downcase_email
    self.email = email.downcase
  end

end
