Rails.application.routes.draw do
  
  resources :punch_cards
  resources :customers
  resources :coffee_shops
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
