class Item < ApplicationRecord
  belongs_to :closet

  PERMITTED_ATTRS = [
    :id, :name, :buy_date, :expr_date, :amount, :location, :image, :price, :closet_id,
  ]

  def json_data
    self.as_json(only: [
      :id,
      :name,
      :location,
      :buy_date,
      :expr_date,
      :amount,
      :image,
      :price,
      :closet_id,
    ])
  end
end
