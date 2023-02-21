class LocationSerializer < ActiveModel::Serializer
  attributes :id, :trail_name, :city_state, :image_url, :difficulty, :length, :elevation_gain, :route_type

   has_many :hike_trails, serializer: HikeTrailReviewSerializer
   has_many :users

   def city_state
    "#{self.object.city}, #{self.object.state}"
   end

end
