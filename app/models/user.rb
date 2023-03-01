class User < ApplicationRecord
 has_secure_password # which adds multiple methods to the user model for reading, writing, and ecrypting passwords. 

 has_many :hike_trails, dependent: :destroy
 has_many :locations, through: :hike_trails

 validates :account_name, 
            uniqueness: true,
            length: { in: 5...15 }
 validates :email, presence: true #, uniqueness: true
 validates :password, length: { in: 6..10 }
 
end

# https://guides.rubyonrails.org/active_record_validations.html#confirmation

# NOTES TO SELF: 
 # two arguments: first one is symbol of :account_name and the 2nd argument is the hash with one key value pair a symbol of presence pointing to true but we do not need the () and {}
 # validates (:account_name, {:presence => true})

