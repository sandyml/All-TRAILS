Rails.application.routes.draw do
  # resources :users
  # resources :usernames
  # resources :hike_trails, expect: [:index, :show]
  resources :hike_trails, only: [:create, :update, :destroy]
  resources :locates, only: [:create]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy" 

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

# CREATE / READ: locate and account_user
# CRUD: hike
