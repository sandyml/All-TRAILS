class HikeTrail < ApplicationRecord
  belongs_to :user
  belongs_to :locate

  validates :review, presence: true
  validates :date, presence: true
end

# [] validates presence 