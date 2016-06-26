Rails.application.routes.draw do
  get '/' => 'pages#index'

  post '/users' => 'users#create'
end
