class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :account_name, :email
  has_many :hike_trails #, serializer: HikeTrailReviewSerializer
end

#tentative added 2/23 for nested and add to usercontroller in show 
