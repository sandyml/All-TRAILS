class HikeTrail < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :review, presence: true
    #  500 character count
  validates :date, presence: true

  # removed validates format_date

    def format_date
      # byebug
      self.date.strftime("%m/%d/%Y")
      # self.date.to_s(:stamp)
      # self.date(:strftime,("%m/%d/%Y"))
    end

end

# Need to grab review: 
  # HikeTrail.pluck(:review)
  # HikeTrail.all.pluck(:review)