class ApplicationController < ActionController::API
  include ActionController::Cookies

  def user_signed_in?
    !!session[:user_id]
  end

  def current_user
    @current_user = User.find_by_id(session[:user_id]) if user_signed_in? 
    # current_user = User.find_by(id: session[:user_id]) if user_signed_in? 
  end

  # def current_user
  #   return unless session[:user_id]
  #   @current_user ||= User.find(session[:user_id])
  # end
  
  # def record_not_found
  #   render json: { error: "Article not found" }, status: :not_found
  # end


end


# [x] create signin? (user_signed_in method name)
  # user ? to make it a question 
  #https://stackoverflow.com/questions/38856994/undefined-method-logged-in-ruby-on-rails

# [x] create current_user
  # https://stackoverflow.com/questions/12719958/rails-where-does-the-infamous-current-user-come-from