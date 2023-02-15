class HikeTrailSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :location_id, :format_date #, :account_name
  # client side change formatdate date 

  belongs_to :location, serializer: LocationSerializer
  belongs_to :user
end
