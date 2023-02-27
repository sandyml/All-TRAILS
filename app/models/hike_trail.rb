class HikeTrail < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :review, 
    presence: true
    #  500 character count
  validates :date, 
    presence: true


  # removed validatesformat_date
    def format_date
      self.date.strftime("%Y-%m-%d")
    end

end

# Need to grab review: 
  # HikeTrail.pluck(:review)
  # HikeTrail.all.pluck(:review)