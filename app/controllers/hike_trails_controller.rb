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

  def show
    @hike = find_hike #will raise the error of rescue from 
    render json: @hike, status: :ok      
  end

  def show
    hike = HikeTrail.find(params[:id])
    render json: hike, include: :users, status: :ok
  end 

  def update
   hike = HikeTrail.find_by_id(params[:id]) 
   render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

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

  def destroy
    # byebug
    @hike_trail = HikeTrail.find(params[:id])
    @hike_trail.destroy
    render json: @hike_trail, status: :ok 
  end 

  private

  def find_hike_trail
    HikeTrail.find_by(id: params[:id])
  end

  def find_hike
    @hike = HikeTrail.find(params[:id])
  end

  def hike_trail_params
    params.permit(:location_id, :account_name, :review, :date)
  end

end

  # [] FULL CRUD FOR JOIN TABLE 
 # [] POST /hikes create
 # [] PATCH /hiketrails/:id update
 # [] DELETE/DESTROY /hiketrails/:id delete