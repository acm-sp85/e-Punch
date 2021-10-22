class CoffeeShop < ApplicationRecord
    has_many :punch_cards, dependent: :delete_all
    has_many :customers, through: :punch_cards

    validates :user_name, presence: true , uniqueness: true 
    has_secure_password
end
