class HikeTrailReviewSerializer < ActiveModel::Serializer
  attributes :format_date, :review, :user 
  
  def format_date
    self.object.date.strftime("%Y-%m-%d")
  end

end
