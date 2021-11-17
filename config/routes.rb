Rails.application.routes.draw do
  resources :customers
  resources :punch_cards
  resources :coffee_shops
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]


  get "/me", to: "coffee_shops#logged_in"
  get "/coffee_shops/:id/punch_cards_sorted", to: "coffee_shops#sort_punch_cards"
  get "/coffee_shops/:id/punch_cards", to: "coffee_shops#show_punch_cards"
  get "/coffee_shops/:id/customers", to: "coffee_shops#show_customers"
  get "/customers/find/:user_name", to: "customers#find_by_name"



  post "/signup", to: "coffee_shops#create"
  post "/login", to: "sessions#create"
  post "/punch_cards/:id/update", to: "punch_cards#update"
  
  delete "/logout", to: "sessions#logout"

  get "/", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
