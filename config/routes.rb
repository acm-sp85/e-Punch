Rails.application.routes.draw do
  
  resources :punch_cards
  resources :customers
  resources :coffee_shops
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/shops", to: "coffee_shops#index"
  get "/customers", to: "customers#index"
  get "/cards", to: "punch_cards#index"

end
