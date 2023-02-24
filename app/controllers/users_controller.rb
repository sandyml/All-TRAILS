class UsersController < ApplicationController
 skip_before_action :authorize
 include ActionController::Cookies
 # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found #will raise errors along side find instead of find_by

 def index
  render json: User.all, except: [:created_at, :updated_at], status: :ok
  # render json: User.all, adapter: nil, // turn off serializer gem and gives us access to the built in serializers again except: [:created_at, :updated_at], status: :ok
 end

 # def show
 #  render json: @user, status: :ok
  # render json: @current_user, status: :ok
  # render json: @current_user #, serializer: UserShowSerializer, status: :ok
  # render json: @user, serializer: UserShowSerializer, status: :ok
  # render json: User.find_by(id: params[:id]), status: :ok
  # render json: @user, serializer: UserHikeTrailsSerializer, status: :ok
  # render json: @current_user, status: :ok
 # end

 def show
 # user_found = User.find_by(id: params[:id])
 if @current_user
  render json: @current_user, serializer: UserShowSerializer, status: :ok
 else 
  render json: { error: "User not found"}, status: :not_found  
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