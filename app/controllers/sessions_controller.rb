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
  render json: { message: ["You are now logged out! Happy Hiking!"] }, status: :no_content
 end

 private

 def unprocessable_entity_error_response
  return render json: { errors: ["Invalid username or password"] }, status: :unathorized
 end

end

# [x] Authentication
# [ ] DRY?  
# [x] login use #create /post
# [x] logout use #destroy /delete
# keep error messages in array to keep consistency when it comes to errors 
 # - easier for frontend/client-side
 # - skip_before_action :authorize, only: [:create] (delete?)

# def index
#  session[:session_hello] ||= "World"
#  cookies[:cookies_hello] ||= "World"
#  render json: { session: session, cookies: cookies.to_hash }
# end