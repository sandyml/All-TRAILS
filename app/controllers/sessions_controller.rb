class SessionsController < ApplicationController
 
 # POST /login :create
 def create
  user = User.find_by(account_name: params[:account_name])
  if user&.authenticate(params[:password])
   session[:user_id] = user.id
   render json: user, status: :ok
  else
   unprocessable_entity_error_response
   # render json: { errors: ["Username or Password does not exist!"] }, status: :unprocessable_entity
  end
 end

 # DELETE /logout :destroy 
 def destroy 
  session.delete :user_id
  render json: { message: "You are now logged out! Happy Hiking!" }
 end

 # def destroy
 #  session.delete :user_id
 #  head :no_content
 # end

 private

 def unprocessable_entity_error_response
  return render json: { errors: ["Username or Password does not exist!"] }, status: :unprocessable_entity
 end

end

# [x] Authentication
# [ ] DRY?  
# [x] login use #create /post
# [x] logout use #destroy /delete
# keep error messages in array to keep consistency when it comes to errors 
 # - easier for frontend/client-side 

# def index
#  session[:session_hello] ||= "World"
#  cookies[:cookies_hello] ||= "World"
#  render json: { session: session, cookies: cookies.to_hash }
# end