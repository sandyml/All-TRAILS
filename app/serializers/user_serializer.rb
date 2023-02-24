class UserSerializer < ActiveModel::Serializer
  attributes :id, :account_name, :email

  # has_many :hike_trails, serializer: HikeTrailReviewSerializer

end