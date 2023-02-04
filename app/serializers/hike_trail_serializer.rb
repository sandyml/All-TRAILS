class HikeTrailSerializer < ActiveModel::Serializer
  attributes :id, :review, :date, :user_id, :locate_id

  # belongs_to :locate serializer: LocateSerializer
  # belongs_to :locate serializer: HikeLocateSerializer??
end
