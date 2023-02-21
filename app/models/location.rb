class Location < ApplicationRecord
 validates :trail_name, :city, :state, :image_url, :difficulty, :length, :elevation_gain, :route_type, presence: true

 has_many :hike_trails, dependent: :destroy
 has_many :users, through: :hike_trails
end