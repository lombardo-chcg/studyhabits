class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      UserMailer.account_activation(@user).deliver_now
      render :json => { user: true }
    else
      render :json => { errors: @user.errors.full_messages }
    end
  end

  def set_preferences
    @user = current_user
    if params[:no_preferences] == nil && params[:preferences] == nil
      render :json => { errors: ['no preferences were selected'] }
    elsif params[:no_preference]
      @user.preferences.create(tag_id: Tag.find_by(description: "no_preference"))
      render :json => { status: true }
    else
      params[:preferences].each do |preference, status|
        @user.preferences.create(tag_id: Tag.find_by(description: preference))
        render :json => { status: true }
      end
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

  def preference_params
    params.permit(:no_preference, :preferences)
  end
end
