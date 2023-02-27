class HikeTrail < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :review, presence: true
    #  500 character count
  validates :date, presence: true


  # removed validates format_date
    def format_date
      # self.date.to_s(:stamp)
      self.date.strftime("%m/%d/%Y")
    end
    # def format_date
    #   # self.date.strftime("%Y-%m-%d")
    #   self.date.to_s(:stamp)
    # end

end

# Need to grab review: 
  # HikeTrail.pluck(:review)
  # HikeTrail.all.pluck(:review)