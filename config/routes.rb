Rails.application.routes.draw do
  
  resources :hike_trails
  # resources :locates, only: [:index, :show, :create]
  resources :usernames
  # resources :users

  post "/signup", to: "users#create"
  # get "/me", to: "users#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

# CREATE / READ: locate and account_user
# CRUD: hike
