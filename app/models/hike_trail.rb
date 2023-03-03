class HikeTrail < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :review, presence: true
  validates :date, presence: true

  def format_date
   self.date.strftime("%m/%d/%Y")
  end

end