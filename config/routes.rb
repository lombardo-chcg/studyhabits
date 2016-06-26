Rails.application.routes.draw do
  get '/' => 'pages#index'

  post '/users' => 'users#create'
  resources :account_activations, only: [:edit]
end
