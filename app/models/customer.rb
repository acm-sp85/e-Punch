class Customer < ApplicationRecord
    has_many :punch_cards
    has_many :coffee_shops, through: :punch_cards

    validates :name , :contact , :user_name , presence: true , uniqueness: true
end
