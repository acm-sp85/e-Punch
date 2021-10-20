class CoffeeShop < ApplicationRecord
    has_many :punch_cards
    has_many :customers, through: :punch_cards
end
