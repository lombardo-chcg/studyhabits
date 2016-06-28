Rails.application.routes.draw do
  root 'pages#index'
  get '/' => 'pages#index'

  post '/sessions' => 'sessions#create'
  get '/sessions/destroy' => 'sessions#destroy'

  post '/users' => 'users#create'
  post '/users/preferences' => 'users#set_preferences'

  resources :account_activations, only: [:edit]

  get '/theaters/serve' => 'theaters#serve'
end
