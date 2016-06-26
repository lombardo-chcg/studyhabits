def edit
  user = User.find_by(email: params[email])
  if user && !user.activated?
    user.update_attributes(activated: true)
    render :json => {userId: user.id, userName: user.username}
  else
    render :json => {errors: ['invalid link']}
  end
end
