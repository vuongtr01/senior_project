FactoryBot.define do
  factory :item do
    name { FFaker::Product.product_name }
    buy_date { Time.zone.now }
    expr_date { Time.zone.now + 4.days}
    amount { 2 }
    location { FFaker::Address.city }
    closet
  end
end
