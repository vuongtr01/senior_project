# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Seed User
puts "Create user"
user = User.create(fname: "Tester1", lname: "User", email: "tester1@gmail.com", password: "123456789")

# Seed Closet and Item
categories = ["Food", "Clothes", "School", "Home", "Kitchen"]

puts "Seed closets and items"
categories.each do |c|
    closet = user.closets.create(category: c)
  
    # Create 2 items for each closet
    2.times do
      closet.items.create(
        name: Faker::Commerce.product_name,
        amount: 10
      )
    end
end

