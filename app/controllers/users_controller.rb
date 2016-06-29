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
    p params
    @user = current_user
    if !params[:no_preferences] && !params[:preferences]
      render :json => { errors: ['no preferences were selected'] }
    elsif params[:no_preferences]
      puts 'hi'
      @user.preferences.create(tag_id: Tag.find_by(description: "no_preference"))
      render :json => { userPreferences: ['no preferences'] }
    elsif params[:preferences]
      params[:preferences].each do |preference, status|
        @user.preferences.create(tag_id: Tag.find_by(description: preference))
      end
      render :json => { status: true }
    else
      render :json => {errors: ['Error code 867-5309']}
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
