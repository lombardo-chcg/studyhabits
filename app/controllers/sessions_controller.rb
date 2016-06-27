class SessionsController < ApplicationController

 def new
   redirect_to root_path
 end

 def create
   @user = User.find_by(email: params[:login]) || User.find_by(username: params[:login])

   if @user && !@user.activated? && @user.authenticate(params[:password])
     UserMailer.account_activation(@user).deliver_now
     render :json => { errors: ['your account has not been activated! please check your email and click on the link.  we just resent the email for your convenience.'] }
   elsif @user && @user.activated? && @user.authenticate(params[:password])
     session[:user_id] = @user.id
     render json: {  userId: session[:user_id],
                     userName: @user.username,
                   }
   else
      render :json => { errors: ['your credentials were invalid'] }
   end
 end

private
 def session_params
   params.permit(:login, :password,)
 end
end
