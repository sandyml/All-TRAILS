Rails.application.routes.draw do
  resources :users #, only: [:index, :create, :show]
  resources :hike_trails, only: [:index, :create, :show, :update, :destroy]
  resources :locations, only: [:index, :create] 

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy" 

  # hike_trails -> nested reviews 
  # resources :hike_trails, only: [:show] do
  #   resources :reviews, only: [:show, :index]
  # end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end