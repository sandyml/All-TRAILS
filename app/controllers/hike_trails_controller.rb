class HikeTrailsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_not_found_error
  skip_before_action :authorized #, only: [:index, :show]
  # MASTER BRANCH!!!

  # GET '/hike_trails' all hike_trails
  def index
    hikes = HikeTrail.all
    render json: hikes, status: :ok
  end

  # GET /hike_trails/:id for a hike based on id params
  def show
    hike = find_hike
    render json: hike, include: [:user], status: :ok
  end

  # POST '/hike_trails' ==> create new review, based on logged in user
  # def create
  #   hikes = HikeTrail.all
  #   # hike = @current_user.hikes.create(hikes_params) // associated build
  #   create_hike = hikes.create(hike_trail_params)
  #   render json: create_hike, include: [:user_id], status: :created
  # end

  def create
    hikes = HikeTrail.all
    hike = hikes.create(hike_trail_params)
    if hike.valid?
      render json: hike, include: [:user], status: :created
    else
      render json: { errors: hike.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # shorten method if possible only works because strftime will not return nil 
  # def create
  #   hikes = HikeTrail.all
  #   hk = hikes.create(hike_trail_params)
  #   if hk.valid?
  #     render json: hk, include: [:user], status: :created
  #   else
  #     render json: { errors: hk.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  # PATCH '/hike_trails/:id'
  def update
    # byebug
    @hike = find_hike
    @hike.update(hike_trail_params)
    render json: @hike, status: :accepted
  end

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

  # will not beed user_id / ids no longer need via body of request, params given to us by the request whether routes/body of fetch req because is is coming from out create 
  def hikes_params
    params.permit(:location_id, :account_name, :review, :format_date, :date)
  end

  def hike_trail_params
    params.permit(:id, :user_id, :location_id, :account_name, :review, :format_date, :date)
  end
  
  # only permit the review and date 
  def edit_hike_params
    params.permit(:review, :date)
  end

  def unprocessable_entity_not_found_error
    render json: { message: ["Review not found"] }, status: :unprocessable_entity unless @hike
  end

end