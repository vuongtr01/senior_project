class Closet < ApplicationRecord
  include PgSearch::Model
  belongs_to :user
  has_many :items

  PERMITTED_ATTRS = [
    :id, :category, :user_id,
    item_attributes: [:id, :name, :buy_date, :expr_date, :amount, :location, :image, :price],
  ]

  pg_search_scope :search_by_category,
  against: :category,
  using: {
    tsearch: { prefix: true, any_word: true },
  }

  scope :valid_search, lambda {
    where.not(category: nil)
  }

  scope :search, ->(key, selected = []) do
    return if key.blank?
    search = valid_search.search_by_category(key)
    if selected.present?
      search = search.where.not(id: selected)
    end
    search
  end

  def count_items
    items.count
  end
end
