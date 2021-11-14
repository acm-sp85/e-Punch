
require "faker"


puts '❌ ❌ ❌ deleting all seeds... ❌ ❌ ❌'
CoffeeShop.destroy_all
Customer.destroy_all
PunchCard.destroy_all

puts '☕  ☕  ☕  Seeding coffee shops... ☕  ☕  ☕ '

CoffeeShop.create(
    name: "Admin",
    user_name: "a",
    description: "Admin",
    contact: "0",
    password: "password"
    
)
15.times {CoffeeShop.create(
    name: Faker::Name.name,
    user_name: Faker::Internet.email,
    description: Faker::TvShows::SiliconValley.motto,
    address: Faker::Address.full_address,
    contact: Faker::PhoneNumber.cell_phone,
    password: "password")}
    
    
puts '👨  👩  Seeding customers... 👨  👩 '

30.times {Customer.create(
    name: Faker::Name.male_first_name,
    contact: Faker::PhoneNumber.cell_phone,
    user_name:Faker::Internet.email,
    photo: "https://randomuser.me/api/portraits/med/men/#{rand(1..75)}.jpg"
    )}


    
    
puts '💳  💳  💳  Seeding punch cards... 💳  💳  💳 ' 

50.times {PunchCard.create(
    coffee_shop_id: rand(1..10),
    customer_id: rand(1..20),
    counter: rand(1..9)
   
)}
10.times {PunchCard.create(
    coffee_shop_id: 1,
    customer_id: rand(1..20),
    counter: rand(1..9)
   
)}







puts 'seeding done'