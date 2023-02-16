class User < ApplicationRecord
 has_secure_password # which adds multiple methods to the user model for reading, writing, and ecrypting passwords. 

 has_many :hike_trails, dependent: :destroy
 has_many :location, through: :hike_trails

 validates :account_name, 
            uniqueness: true,
            length: { in: 5...7 }

 validates :email, uniqueness: true

 validates :password, length: { in: 6..10 }
end

# https://guides.rubyonrails.org/active_record_validations.html#confirmation