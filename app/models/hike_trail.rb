class HikeTrail < ApplicationRecord
  belongs_to :user
  belongs_to :locate

  validates :review, 
    presence: true,
    length: { in: 10...100 }
  validates :date, 
    presence: true,
    length: { in: 6...8 }
end

# [] validates presence 