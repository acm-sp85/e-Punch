class CoffeeShop < ApplicationRecord
    has_many :costumers
    has_many :punch_cards
end
