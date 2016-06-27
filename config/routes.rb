Rails.application.routes.draw do
  root 'pages#index'
  get '/' => 'pages#index'

  post '/sessions' => 'sessions#create'
  get '/sessions/destroy' => 'sessions#destroy'

  post '/users' => 'users#create'

  resources :account_activations, only: [:edit]

  get '/theaters/serve' => 'theaters#serve'
end
