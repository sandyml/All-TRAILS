class UserSerializer < ActiveModel::Serializer
  attributes :id, :account_name, :email, :password_digest

  has_many :hike_trails, serializer: HikeLocationSerializer
  # has_many :locations, dependent: :destroy
  # has_many :locations
end

# [x] has_many & dependent: :destroy 
# [] serializer hike_location_serializer