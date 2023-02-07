class User < ApplicationRecord
 has_secure_password
 has_many :hike_trails, dependent: :destroy
 has_many :locates, through: :hike_trails


 validates :account_name, presence: true, uniqueness: true
end

# [x] macros: has_many 
# [x] BCrypt: Password / Authentication 
# [x] validations: presence & uniq
