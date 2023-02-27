class LocationsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    render json: Location.all
  end

  def create
    @location = Location.new(location_params)
    if @location.save
    render json: @location, status: :created
    else
    render json: { errors: @location.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def location_params 
    params.require(:location).permit(
      :trail_name, 
      :city, :state, 
      :image_url, 
      :difficulty, 
      :length, 
      :elevation_gain, 
      :route_type
    )
  end

 # def unprocessable_entity_errors_response(location)
 #  return render json: { errors: location.errors.full_messages }, status: :unprocessable_entity
 # end

end


# [] CREATE / READ ACTION 
 # - CREATE - one GET REQUEST to retrieve location & hikes / one state useState 
# [] create 