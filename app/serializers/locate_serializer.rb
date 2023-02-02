class LocateSerializer < ActiveModel::Serializer
  attributes :id, :trail_name, :city, :state, :image_url, :difficulty, :length, :elevation_gain, :route_type
end
