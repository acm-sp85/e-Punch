Rails.application.routes.draw do
  
  resources :punch_cards
  resources :customers
  resources :coffee_shops
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # get "/shops", to: "coffee_shops#index"
  # get "/shops/:id", to: "coffee_shops#show"

  get "/customers/:id/punch_cards", to: "customers#show_punch_cards"
  get "/customers/:id/coffee_shops", to: "customers#show_coffee_shops"
  
  get "/coffee_shops/:id/customers", to: "coffee_shops#show_customers"
  # get "/cards", to: "punch_cards#index"
  # get "/cards/:id", to: "punch_cards#show"


# POST 
# PATCH
# DELETE

end
