class User < ActiveRecord::Base
  has_many :favings
  has_many :favs, through: :favings
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
    self.clear_preferences
    preferences_array.each do |preference|
      self.preferences.create(tag_id: Tag.find_by(sku: preference).id)
    end
  end

  def clear_preferences
    if self.preferences then self.preferences.destroy_all end
  end

  def update_preferences
    # need to handle adding AND deleting of preferences
  end


  def has_preference?(tag)
    if self.preferred_tags.find_by(sku: tag)
      return true
    end
    false
  end

  private

  def create_activation_token
    self.activation_token = SecureRandom.urlsafe_base64
  end

  def downcase_email
    self.email = email.downcase
  end

end
