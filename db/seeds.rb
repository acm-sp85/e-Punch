# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "faker"


puts '❌ ❌ ❌ deleting all seeds... ❌ ❌ ❌'
CoffeeShop.destroy_all
Customer.destroy_all
PunchCard.destroy_all

puts '☕  ☕  ☕  Seeding coffee shops... ☕  ☕  ☕ '

15.times {CoffeeShop.create(
    name: Faker::Name.name,
    user_name: Faker::Internet.email,
    address: Faker::Address.full_address,
    contact: Faker::PhoneNumber.cell_phone,
    password: "password")}
    
puts '👨  👩  Seeding customers... 👨  👩 '

30.times {Customer.create(
    name: Faker::Name.name,
    contact: Faker::PhoneNumber.cell_phone,
    user_name:Faker::Internet.email
    )}
    
    
puts '💳  💳  💳  Seeding punch cards... 💳  💳  💳 ' 

50.times {PunchCard.create(
    coffee_shop_id: rand(1..10),
    customer_id: rand(1..20),
    counter: rand(1..9)
   
)}





puts 'seeding done'