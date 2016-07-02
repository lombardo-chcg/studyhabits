class SessionsController < ApplicationController

 def new
   redirect_to root_path
 end

 def create
   @user = User.find_by(email: params[:login]) || User.find_by(username: params[:login])

   if @user && !@user.activated?
     UserMailer.account_activation(@user).deliver_now
     render :json => { errors:
                        ['your account has not been activated!
                          please check your email and click on
                          the link.  we just resent the email.'] }
  #  elsif @user && @user.activated? && @user.authenticate(params[:password])
    elsif user_activated_and_password_valid?(@user, params[:password])
     session[:user_id] = @user.id
     render json: {  userId: session[:user_id],
                     userName: @user.username,
                     userPreferences: @user.get_preferences
                   }
   else
      render :json => { errors: ['your credentials were invalid'] }
   end
 end

 def destroy
  session[:user_id] = nil
  render json: {logout: true}
end

private
 def session_params
   params.permit(:login, :password,)
 end
end
