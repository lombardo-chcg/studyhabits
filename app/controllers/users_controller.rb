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


  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
