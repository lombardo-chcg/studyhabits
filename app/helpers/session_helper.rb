module SessionHelper
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    return true if session[:user_id] != nil
  end

  def user_activated_and_password_valid?(user, password)
    user && user.activated? && user.authenticate(password)
  end
end
