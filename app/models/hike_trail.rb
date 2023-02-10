class HikeTrail < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :review, 
    presence: true
    #  500 character count
  validates :date, 
    presence: true

    # 2023-12-02
    def format_date
      self.date.strftime("%Y-%m-%d")
    end

end