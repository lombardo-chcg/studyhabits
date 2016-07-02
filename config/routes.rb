Rails.application.routes.draw do
  root 'pages#index'
  get '/' => 'pages#index'

  post '/sessions' => 'sessions#create'
  get '/sessions/destroy' => 'sessions#destroy'

  post '/users' => 'users#create'
  post '/users/preferences' => 'users#set_preferences'
  get  '/users/preferences' => 'users#get_preferences'

  get 'pages/test' => 'pages#test'

  resources :account_activations, only: [:edit]

  post '/theaters/serve' => 'theaters#serve'
end
