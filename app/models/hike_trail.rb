class HikeTrail < ApplicationRecord
  belongs_to :user
  belongs_to :locate
end
