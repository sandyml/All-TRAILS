class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :account_name, :email
  
  has_many :hike_trails 
end