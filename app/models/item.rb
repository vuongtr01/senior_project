class Item < ApplicationRecord
  include PgSearch::Model
  belongs_to :closet
  mount_uploader :image, ImageUploader

  PERMITTED_ATTRS = [
    :id, :name, :buy_date, :expr_date, :amount, :location, :image, :price, :closet_id,
  ]

  pg_search_scope :search_by_name,
  against: :name,
  using: {
    tsearch: { prefix: true, any_word: true },
  }

  scope :valid_search, lambda {
    where.not(name: nil)
  }

  scope :search, ->(key, selected = []) do
    return if key.blank?
    search = valid_search.search_by_name(key)
    if selected.present?
      search = search.where.not(id: selected)
    end
    search
  end

  def json_data
    as_json(only: [
      :id,
      :name,
      :location,
      :buy_date,
      :expr_date,
      :amount,
      :image,
      :price
    ]).merge({
      'closet' => {
        'id' => closet.id,
        'value' => closet.category,
        'label' => closet.category,
      }
    })
  end
end
