class UserHikeTrailsSerializer < ActiveModel::Serializer
  attributes :id, :account_name, :email, :password

  # has_many :user
  has_many :hike_trails
end
