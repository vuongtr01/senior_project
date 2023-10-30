class Item < ApplicationRecord
  belongs_to :closet

  PERMITTED_ATTRS = [
    :id, :name, :buy_date, :expr_date, :amount, :location, :image, :price, :closet_id,
  ]
end
