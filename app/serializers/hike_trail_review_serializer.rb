class HikeTrailReviewSerializer < ActiveModel::Serializer
  attributes :format_date, :review, :user, :user_id, :id 
  
  # def format_date
  #   self.strftime("%Y-%m-%d")
  # end

end
