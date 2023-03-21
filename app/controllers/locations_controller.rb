class LocationsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  # DISPLAYS ALL ITEMS / LOCATIONS 
  def index
    render json: Location.all
  end

  # I DON'T THINK I NEED THIS NOT CREATING A NEW LOCATION / TENTATIVE
  def create
    @location = Location.new(location_params)
      if @location.save
        render json: @location, status: :created
      else
        render json: { errors: @location.errors.full_messages }, status: :unprocessable_entity
      end
  end

  # STRONG PARAMS
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

end