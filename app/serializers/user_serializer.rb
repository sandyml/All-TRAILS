class UserSerializer < ActiveModel::Serializer
  attributes :id, :account_name, :email, :password_digest

  has_many :hike_trails, serializer: HikeLocateSerializer
  # has_many :locates, dependent: :destroy
  # has_many :locates
end

# [x] has_many & dependent: :destroy 
# [] serializer hike_locate_serializer