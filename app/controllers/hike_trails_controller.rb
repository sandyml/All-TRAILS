class HikeTrailsController < ApplicationController
#  before_action :authorize, only: [:create, :index]
#  before_action :hike_finder
#  skip_before_action :authorize, only: [:update, :destroy]
#  skip_before_action :authorize, only: [:index]
 skip_before_action :authorize, only: [:index, :show]

  # GET REQUEST /hike_trails 
  def index
    render json: HikeTrail.all, status: :ok
  end

  # POST REQUEST /hike_trails
  def create
    hike = HikeTrail.create!(hike_trail_params)
    render json: hike, status: :ok
  end

  # def show
  #   hike_reviews = find_hike_trail_by_review
  #   render json: hike_reviews, status: :ok
  # end

  # def update
  #  hike = HikeTrail.find_by_id(params[:id]) 
  #  return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  # end

  # def update
  #   @user = User.find_by(id: session[:user_id])
  #   @hike = @user.hike_trails.find_by(id: params[:id])
  #   if @hike
  #   @hike.update(hike_trail_params)
  #     render json: @hike
  #   else 
  #     render json: { error: ["Review not found"] }, status: :not_found
  #   end
  # end

  # def destroy
  # @user = User.find_by(id: session[:user_id])
  # @hike = @user.hike_trails.find_by(id: params[:id])
  # if @hike
  #   @hike.destroy
  #   render json: @hike
  # else 
  #     # review_not_found_error_response
  #   render json: { error: ["Review not found"] }, status: :not_found #status: :no_content
  # end
  # end

  # def destroy
  #  session.delete :user_id
  #  head :no_content
  # end

  # tentative for nested reviews 
  def reviews_index
    hikes = HikeTrail.find(params[:id])
    reviews = hike_trail.reviews
    render json: reviews, include: :hike_trails    
  end

  def reviews
    review = User.find(params[:id])
    render json: review, include: :hike_trails    
  end

  private

  def find_hike_trail
    HikeTrail.find_by(id: params[:id])
  end

  # def find_hike_trail_by_review
  #   HikeTrail.find_by(review: params[:review])
  # end

  def hike_trail_params
    params.permit(:location_id, :account_name, :review, :date)
  end

end

  # [] FULL CRUD FOR JOIN TABLE 
 # [] POST /hikes create
 # [] PATCH /hiketrails/:id update
 # [] DELETE/DESTROY /hiketrails/:id delete