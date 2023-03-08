class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create, :destroy]

    # Login
    def create
        @user = User.find_by(account_name: params[:account_name])
        if @user&.authenticate(params[:password])
            session[:user_id] = @user.id
            render json: @user, status: :ok
        else
            render json: { errors: ["Invalid Username or Password"] }, status: :unauthorized
        end
    end  

    # Logout
    def destroy
        session.delete :user_id
        head :no_content
    end

end