class ApplicationController < ActionController::API
  include ActionController::Cookies # gives access to cookies to all subsequent controllers 

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
  before_action :authorized

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    User.find_by(id: session[:user_id])
  end
  
  def authorized 
    @current_user = User.find_by(id: session[:user_id])
    render json: { error: ["Not Authorized"] }, status: :unauthorized unless @current_user
  end

  def record_not_found
    render json: { error: ["Record not found"] }, status: :not_found
  end

  def render_unprocessable_entity_response(object)
    render json: { errors: object.record.errors.full_messages }, status: :unprocessable_entity
  end

end