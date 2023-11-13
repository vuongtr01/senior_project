FactoryBot.define do
  factory :user do
    fname { FFaker::Name::first_name }
    lname { FFaker::Name::last_name }
    email {"#{fname.gsub(/[^a-zA-Z1-10]/, '')}_#{lname.gsub(/[^a-zA-Z1-10]/, '')}_#{DateTime.now.to_i.to_s}@rakuna.co" }
    password { "Aa12345678" }
    password_confirmation { "Aa12345678" }
  end
end
