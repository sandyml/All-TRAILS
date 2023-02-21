class HikeTrail < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :review, 
    presence: true
    #  500 character count
  validates :date, 
    presence: true
  validates :format_date, 
    presence: true

    def format_date
      self.date.strftime("%Y-%m-%d")
    end

end

# Need to grab review: 
  # HikeTrail.pluck(:review)
  # HikeTrail.all.pluck(:review)