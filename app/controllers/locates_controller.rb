class LocatesController < ApplicationController

 def create
  location = Locate.new(location_params)
  if location.save
   render json: location, status: :created
  else
   # unprocessable_entity_errors_response
   render json: { errors: location.errors.full_messages }, status: :unprocessable_entity
  end
 end

 def location_params 
  params.require(:locate).permit(:trail_name, :city, :state, :image_url, :difficulty, :length, :elevation_gain, :route_type)
  # params.permit(:trail_name, :city, :state, :image_url, :difficulty, :length, :elevation_gain, :route_type)
 end

 # def unprocessable_entity_errors_response
 #  return render json: { errors: location.errors.full_messages }, status: :unprocessable_entity
 # end

end


# [] CREATE / READ ACTION 
 # - CREATE - one GET REQUEST to retrieve location & hikes / one state useState 
# [] create 