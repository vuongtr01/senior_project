class Closet < ApplicationRecord
  belongs_to :user
  has_many :items

  PERMITTED_ATTRS = [
    :id, :category, :user_id,
    item_attributes: [:id, :name, :buy_date, :expr_date, :amount, :location, :image, :price],
  ]

  def count_items
    items.count
  end
end
