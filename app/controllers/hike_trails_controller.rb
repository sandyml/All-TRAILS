class HikeTrailsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_not_found_error
  skip_before_action :authorized
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

  def create
    hike = current_user.hike_trails.create(hike_trail_params)
    if hike.valid?
      render json: hike, include: [:user], status: :created
    else
      render json: { errors: hike.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH '/hike_trails/:id'
  def update
    @hike = find_hike
      if @hike.user_id == current_user.id
        @hike.update(hike_trail_params)
        render json: @hike, status: :accepted
      else 
        render json: { errors: @hike.errors.full_messages }, status: :unprocessable_entity
      end
  end

  # DELETE '/hike_trails/:id'
  def destroy
    @hike_trail = HikeTrail.find(params[:id])
      if @hike_trail.user_id == current_user.id
        @hike_trail.destroy
        render json: @hike_trail, status: :ok    
      else
        render json: { error: "Can not destroy!"}
      end
  end 

  private

  def find_hike_trail
    HikeTrail.find_by(id: params[:id])
  end

  def find_hike
    HikeTrail.find(params[:id])
  end

  # will not need user_id / ids no longer need via body of request, params given to us by the request whether routes/body of fetch req because is is coming from out create 
  def hikes_params
    params.permit(:location_id, :account_name, :review, :format_date, :date)
  end

  def hike_trail_params
    params.permit(:id, :location_id, :account_name, :review, :format_date, :date)
  end

  def unprocessable_entity_not_found_error
    render json: { message: ["Review not found"] }, status: :unprocessable_entity unless @hike
  end

end