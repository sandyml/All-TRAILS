class HikeTrailReviewSerializer < ActiveModel::Serializer
  attributes :format_date, :date, :review, :user, :user_id, :id 
  
  def format_date
    self.object.date.strftime("%Y-%m-%d")
  end

end
