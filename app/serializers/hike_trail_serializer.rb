class HikeTrailSerializer < ActiveModel::Serializer
  attributes :id, :review, :date
  has_one :account_name
  has_one :locate
end
