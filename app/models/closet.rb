class Closet < ApplicationRecord
  belongs_to :user
  has_many :items

  def count_items
    items.count
  end
end
