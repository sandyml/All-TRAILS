class HikeTrailReviewSerializer < ActiveModel::Serializer
  attributes :format_date, :review #:hello
  has_many :hike_trails
  has_many :users
  
  def format_date
    self.object.date.strftime("%Y-%m-%d")
  end

  def hello
    ":D"
  end

end
