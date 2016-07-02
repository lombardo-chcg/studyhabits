class AccountActivationsController < ApplicationController

  def edit
    user = User.find_by(email: params[:email])
    if user && !user.activated?
      user.update_attributes(activated: true, activation_datetime: Time.now)
      render 'edit'
    else
      render :json => {errors: ['invalid link']}
    end
  end

end
