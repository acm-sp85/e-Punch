Rails.application.routes.draw do
  
  resources :punch_cards
  # resources :customers
  # resources :coffee_shops do
  #   resources :punch_cards#, only: [:index]
  #   resources :customers#, only: [:index]
  # end
  resources :coffee_shops
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  # delete :logout, to: "sessions#logout"
  # get :logged_in, to: "sessions#logged_in"
  root to: "static#home"

  
#-----
  get "/customers/:id/punch_cards", to: "customers#show_punch_cards"
  get "/customers/:id/coffee_shops", to: "customers#show_coffee_shops"
  get "/customers/", to: "customers#index"
  get "/customers/find/:user_name", to: "customers#find_by_name"
  get "/customers/:id", to: "customers#show"
  post "/customers", to: "customers#create"
  get "/coffee_shops/:id/customers", to: "coffee_shops#show_customers"

  post "/signup", to: "coffee_shops#create"

  post "/punch_cards/:id/update", to: "punch_cards#update"


  get "/me", to: "coffee_shops#logged_in"
  get "/coffee_shops/:id/punch_cards", to: "coffee_shops#show_punch_cards"
  get "/coffee_shops/:id/customers", to: "coffee_shops#show_customers"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#logout"


end
