Rails.application.routes.draw do
  
  resources :punch_cards
  resources :coffee_shops
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  root to: "static#home"


  # get "/customers/:id/punch_cards", to: "customers#show_punch_cards"
  # get "/customers/:id/coffee_shops", to: "customers#show_coffee_shops"
  # get "/customers/", to: "customers#index"
  # get "/customers/find/:user_name", to: "customers#find_by_name"
  # get "/customers/:id", to: "customers#show"
  # post "/customers", to: "customers#create"
  
  
  post "/punch_cards/:id/update", to: "punch_cards#update"
  
  
  get "/me", to: "coffee_shops#logged_in"
  get "/coffee_shops/:id/punch_cards", to: "coffee_shops#show_punch_cards"
  get "/coffee_shops/:id/customers", to: "coffee_shops#show_customers"
  post "/signup", to: "coffee_shops#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#logout"


end
