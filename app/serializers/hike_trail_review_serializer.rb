class HikeTrailReviewSerializer < ActiveModel::Serializer
  attributes :date, :review
  has_many :hike_trails
  has_many :user

  # def hike_trails
  #   { hike_trails: object.hike_trails.review }    
  # end

end
