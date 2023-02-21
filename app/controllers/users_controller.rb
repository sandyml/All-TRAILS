class UsersController < ApplicationController
 skip_before_action :authorize, only: [:index, :create]
 rescue_from ActiveRecord::RecordNotFound, with: :record_not_found #will raise errors along side find instead of find_by

 # signup 

 def index
  render json: User.all, except: [:created_at, :updated_at], status: :ok
  # render json: User.all, adapter: nil, // turn off serializer gem and gives us access to the built in serializers again except: [:created_at, :updated_at], status: :ok
 end

 # POST /signup 
 # def create
 #  @user = User.create(user_params)
 #  if @user.save
 #   session[:user_id] = @user.id
 #   render json: @user, status: :created
 #  else
 #   unprocessable_entity_error_response(@user)
 #  end 
 # end
 
 # signup
 def create
  # byebug
  user = User.create!(user_params)
  session[:user_id] = user.id
  render json: user, status: :created
 end

 # GET /me :show (refresh page)
 # def show
 #  # byebug
 #  if user_signed_in? 
 #   render json: @current_user
 #  else 
 #   require_login
 #  end
 # end

 def show
  render json: @user, serializer: UserHikeTrailsSerializer
  # user = User.find(params[:id])
  # render json: user, serializer: UserHikeTrailsSerializer
 end

 private

 def user_params
  params.require(:user).permit(:account_name, :email, :password, :password_confirmation)
 end

end


# NOTES: 
# [] strong params / [] OR wrap params 
 # [] DRY 
 # [] private 