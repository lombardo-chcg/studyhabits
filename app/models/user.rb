class User < ActiveRecord::Base

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

  private
  def create_activation_token
    self.activation_token = SecureRandom.urlsafe_base64
  end

  def downcase_email
    self.email = email.downcase
  end

end