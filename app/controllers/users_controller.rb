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
    if !params[:preferences]
      render :json => { errors: ['please select at least one option to continue'] }
    elsif params[:preferences]
      @user.set_preferences(params[:preferences].keys)
      render :json => { userPreferences: @user.get_preferences }
    else
      render :json => {errors: ['Error code 867-5309']}
    end
  end

  def get_preferences
    @user = current_user
    tags.each do |tag_grouping|
      tag_grouping[1].each do |tag|
        if @user.has_preference?(tag["sku"])
          tag["isChecked"] = true
        else
          tag["isChecked"] = false
        end
      end
    end
    render :json => {preferences: tags}
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

  def preference_params
    params.permit(:no_preference, :preferences)
  end
end
