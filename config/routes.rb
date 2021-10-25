Rails.application.routes.draw do
  
  resources :punch_cards
  resources :customers
  resources :coffee_shops
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  # delete :logout, to: "sessions#logout"
  # get :logged_in, to: "sessions#logged_in"
  root to: "static#home"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # get "/shops", to: "coffee_shops#index"
  # get "/shops/:id", to: "coffee_shops#show"

  get "/customers/:id/punch_cards", to: "customers#show_punch_cards"
  get "/customers/:id/coffee_shops", to: "customers#show_coffee_shops"
  
  get "/coffee_shops/:id/customers", to: "coffee_shops#show_customers"
  get "/coffee_shops/:id/punch_cards", to: "coffee_shops#show_punch_cards"
  post "/signup", to: "coffee_shops#create"
  # get "/signup", to: "coffee_shops#create"
  # get "/cards", to: "punch_cards#index"
  # get "/cards/:id", to: "punch_cards#show"

  get "/me", to: "coffee_shops#logged_in"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#logout"


# POST 
# PATCH
# DELETE

end
