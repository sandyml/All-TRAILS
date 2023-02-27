class HikeTrailsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_not_found_error

  skip_before_action :authorized #, only: [:index, :show]
  # before_action :find_hike_trail, only: [:update, :destroy]

  # GET '/hike_trails' all hike_trails
  def index
    hikes = HikeTrail.all
    render json: hikes, status: :ok
  end

  # MASTER BRANCH!!!

  # def index
  #   # determine the route led us here, was it /hike_trails or /users/:user_id/hike_trails
  #  if params[:user_id] # /users/:user_id/blogs
  #    user = User.find_by_id(params[:user_id])
  #    # grab the user
  #    @hikes = user.hike_trails
  #    # render the json of the hikes && the user that they belong to that belong to that user
  #  else # /hike_trails
  #   @hikes = HikeTrail.all
  #  end
  #   render json: @hikes, include: [:user], except: [:user_id]
  #  end

  # GET /hike_trails/:id for a hike based on id params
  def show
    hike = find_hike
    render json: hike, include: [:users], status: :ok
  end

  # POST '/hike_trails' ==> create new review, based on logged in user
  def create
    hike = @current_user.hike_trails.create(hike_trail_params)
    # render json: hike, status: :created
    render json: hike, include: [:user], status: :created
  end


  # PATCH '/hike_trails/:id'
  def update
    @hike = find_hike
    @hike.update(hike_trail_params)
    render json: @hike, status: :accepted
  end

  # def update
  #   hike = find_hike
  #   if hike
  #     hike.update(hike_trail_params)
  #     render json: hike, status: :accepted
  #   else
  #     render json: { errors: ["Hike not found"] }, status: :not_found
  #   end
  # end

  # DELETE '/hike_trails/:id'
  def destroy
    @hike_trail = HikeTrail.find(params[:id])
    @hike_trail.destroy
    render json: @hike_trail, status: :ok 
  end 

  private

  def find_hike_trail
    HikeTrail.find_by(id: params[:id])
  end

  def find_hike
    HikeTrail.find(params[:id])
  end

  def hike_trail_params
    params.permit(:id, :user_id, :location_id, :account_name, :review, :date)
  end
  
  # only permit the review and date 
  def edit_hike_params
    params.permit(:review, :date)
  end

  def unprocessable_entity_not_found_error
    render json: { message: ["Review not found"] }, status: :unprocessable_entity unless @hike
  end

end

 # [] FULL CRUD FOR JOIN TABLE 
 # [] POST /hikes create
 # [] PATCH /hike_trails/:id update
 # [] DELETE/DESTROY /hiketrails/:id delete