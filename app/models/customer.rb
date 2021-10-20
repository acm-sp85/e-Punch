class Customer < ApplicationRecord
    has_many :punch_cards
    has_many :coffee_shops, through: :punch_cards
end
