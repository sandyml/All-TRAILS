class UserSerializer < ActiveModel::Serializer
  # attributes :id, :account_name, :email
  attributes :id, :account_name, :email, :password_digest

  has_many :hike_trails, serializer: HikeLocationSerializer
  # has_many :hike_trails, serializer: HikeTrailReviewSerializer
end