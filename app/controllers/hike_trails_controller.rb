class HikeTrailsController < ApplicationController
 before_action :hike_finder, only: [:update, :destroy]
 # before_action :hike_finder
 # skip_before_action :hike_finder, only: [:update, :destroy]
 # skip_before_action :authorize, only: [:index]

 def create
  if user_signed_in?
   hike = current_user.hike_trails.build(hike_trail_params)
   if hike.save
    render json: hike, status: :ok
   else
    require_login
   end
  else
   unproccessable_entity_errors_response(hike)
   # render json: { errors: hike.errors.full_messages }, serializer: HikeTrailsSerializer
   # render json: { errors: hike.errors.full_messages }, status: :unproccessable_entity 
  end
 end

 # def update
 #  hike = HikeTrail.find_by_id(params[:id]) 
 #  return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
 # end

 # def destroy
 #  session.delete :user_id
 #  head :no_content
 # end

 private

 def hike_trail_params
  params.require(:hike_trails).permit(:locate_id, :review, :date)
  # params.permit(:user, :locate, :review, :date)
 end

 def unproccessable_entity_errors_response(hike)
  render json: { errors: hike.errors.full_messages }, status: :unproccessable_entity 
 end

 def require_login
  render json: { errors: ["Please log in to your account!"]}
 end

 def hike_finder
  hike = HikeTrail.find_by(id: params[:id])
 end

 # def authorize
  
 # end

end

# [] FULL CRUD FOR JOIN TABLE 
 # [] POST /hikes create
 # [] PATCH /hiketrails/:id update
 # [] DELETE/DESTROY /hiketrails/:id delete