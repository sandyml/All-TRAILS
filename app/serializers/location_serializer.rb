class LocationSerializer < ActiveModel::Serializer
  attributes :id, :trail_name, :city, :state, :image_url, :difficulty, :length, :elevation_gain, :route_type

   has_many :hike_trails, serializer: HikeTrailReviewSerializer
end
