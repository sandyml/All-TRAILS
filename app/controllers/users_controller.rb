class UsersController < ApplicationController
 skip_before_action :authorize, only: [:create]

 # signup 

 def index
  render json: User.all
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
  render json: @user
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