class UsersController < ApplicationController
 skip_before_action :authorized #, only: [:show]
 # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found #will raise errors along side find instead of find_by

 def index 
  render json: User.all, status: :ok
  # render json: User.all, adapter: nil, // turn off serializer gem and gives us access to the built in serializers again except: [:created_at, :updated_at], status: :ok
 end

#  current_user coming from application current_user method
 def show
  if current_user
    render json: current_user
  else
    render json: { errors: "Not logged in" }, status: :unauthorized 
  end
end

 # Signup
 def create
  user = User.create!(user_params)
  session[:user_id] = user.id
  render json: user, status: :created
 end

 # Logout
 def destroy
  session.delete :user_id
  head :no_content
 end

 private

 def user_params
  params.permit(:account_name, :email, :password, :password_confirmation)
 end

end