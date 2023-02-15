class SessionsController < ApplicationController
 # skip_before_action :authorize, only: [:create]
 
 # POST /login
 def create
  @user = User.find_by(account_name: params[:account_name])
  if @user&.authenticate(params[:password])
   session[:user_id] = @user.id
   render json: @user, status: :ok
  else
   unprocessable_entity_error_response
  end
 end

 def destroy 
  session.delete :user_id
  # byebug
  render json: { message: ["You are now logged out! Happy Hiking!"] }, status: :no_content
 end
 
 # def destroy
 #  if session.include? :user_id
 #   session.delete :user_id
 #   head :no_content
 #  else
 #   render json: { errors: ["Unauthorized"] }, status: :unauthorized
 #  end
 # end

 private

 def unprocessable_entity_error_response
  return render json: { errors: "Invalid username or password" }, status: :unauthorized
 end

end