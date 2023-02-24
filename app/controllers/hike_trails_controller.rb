class HikeTrailsController < ApplicationController
  # before_action :find_hike_trail, only: [:update, :destroy]
  # before_action :unprocessable_entity_not_found_error, only: [:update, :destroy]
  skip_before_action :authorize, only: [:index]

  # GET REQUEST /hike_trails 
  def index
    hikes = HikeTrail.all
    render json: hikes, status: :ok
  end

  # POST REQUEST /hike_trails
  def create
    hike = HikeTrail.create!(hike_trail_params)
    render json: hike, include: [:user], status: :created
  end

  def show
    @hike = find_hike #will raise the error of rescue from 
    render json: @hike, status: :ok      
  end

  def show
    hike = HikeTrail.find(params[:id])
    render json: hike, include: :users, status: :ok
  end 

  # def update
  #  hike = HikeTrail.find_by(id: params[:id]) 
  #  render json: hike, status: :unauthorized unless session.include? :user_id
  # #  render json: { error: "Not authorized to update" }, status: :unauthorized unless session.include? :user_id
  # end

  # def update # routes PATCH /blogs/:id    
  #   @hike.update(hike_trail_params)
  #   render json: @hike, include: [:user]
  # end

  # PATCH /hike_trails/:id (edit)
  # def update
  #   user = User.find_by(id: session[:user_id])
  #   hike = user.hikes.find_by(id: params[:id])
  #   hike = HikeTrail.find_by(id: params[:id])
  #   if hike
  #     question.update(hike_trail_params)
  #     render json: hike
  #   else 
  #     render json: { error: "Review not found" }, status: :not_found
  #   end
  # end
  def update
    hike = find_hike
    hike.update(hike_trail_params)
    render json: hike, status: :accepted
  end
  

  # def update # routes PATCH /blogs/:id      
  #   @hike.update(edit_hike_params)
  #   render json: @hike, include: [:user]
  # end
  # of this one
  # def update # routes PATCH /blogs/:id  
  #   patch_hike = HikeTrail.find_by(id: params[:id]) 
     
  #   @patch_hike.update(edit_hike_params)
  #   render json: @patch_hike, include: [:user]
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
    HikeTrail.find(params[:id])
  end

  def hike_trail_params
    params.permit(:user_id, :location_id, :account_name, :review, :date)
  end

  # only permit the review and date 
  def edit_hike_params
    params.permit(:review, :date)
  end

  def unprocessable_entity_not_found_error
    render json: { message: "Review not found" }, status: :unprocessable_entity unless @hike
  end

end

# t.bigint "user_id", null: false
# t.bigint "location_id", null: false
# t.text "review"
# t.datetime "date"

  # [] FULL CRUD FOR JOIN TABLE 
 # [] POST /hikes create
 # [] PATCH /hiketrails/:id update
 # [] DELETE/DESTROY /hiketrails/:id delete