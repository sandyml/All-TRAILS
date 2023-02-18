class HikeTrailSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :location_id, :format_date
  # client side change date => format_date 

  belongs_to :location, serializer: LocationSerializer
  belongs_to :user

  # reviews 
  # def new_review
  #   "#{self.object.review[0...500]...}" #text? 
  # end

end
