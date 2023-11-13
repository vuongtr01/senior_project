FactoryBot.define do
  factory :closet do
    category { FFaker::Product.product_name }
    user
  end
end
