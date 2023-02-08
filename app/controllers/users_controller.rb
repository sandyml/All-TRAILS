class UsersController < ApplicationController

 def index
  render json: User.all
 end

 # POST /signup 
 def create
  user = User.new(user_params)
  if user.save
   session[:user_id] = user.id
   render json: user, status: :created
  else 
   unprocessable_entity_error_response(user)
  end
 end

 # def create
 #  @user = User.create(user_params)
 #  render json: @user, status: :created
 # end

 # GET /me :show (refresh page)
 def show
  # byebug
  if user_signed_in? 
   render json: @current_user
  else 
   require_login
  end
 end

 private

 def user_params
  params.require(:user).permit(:account_name, :email, :password)
 end

 def unprocessable_entity_error_response(user)
  return render json: { errors: user.errors.full_messages }, status: :unprocessable_entity 
 end

 def require_login
  return render json: { errors: ["Please log in to your account!"]}
 end

end


# NOTES: 
# [] strong params / [] OR wrap params 
 # [] DRY 
 # [] private 