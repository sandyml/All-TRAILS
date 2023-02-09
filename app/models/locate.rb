class Locate < ApplicationRecord
 has_many :hike_trails, dependent: :destroy
 has_many :users, through: :hike_trails

 validates :trail_name, :city, :state, :image_url, :difficulty, :length, :elevation_gain, :route_type, presence: true

 # validates :trail_name, presence: :true 
 # validates :city, presence: :true 
 # validates :state, presence: :true 
 # validates :image_url, presence: :true 
 # validates :difficulty, presence: :true 
 # validates :length, presence: :true 
 # validates :elevation_gain, presence: :true 
 # validates :route_type, presence: :true 
end

# [x] has_many JOIN 
# [x] validations 
 # - locates migration for reference 