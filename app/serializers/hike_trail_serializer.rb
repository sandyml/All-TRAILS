class HikeTrailSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :location_id, :date, :format_date
  
  belongs_to :location, serializer: LocationSerializer
  belongs_to :user

end
