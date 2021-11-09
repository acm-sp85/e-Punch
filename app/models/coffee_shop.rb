class CoffeeShop < ApplicationRecord
    has_many :punch_cards, dependent: :delete_all
    has_many :customers, through: :punch_cards

    validates :user_name, :name, :description , :contact , presence: true
    validates :user_name, :name , :contact , uniqueness: true 
    has_secure_password
end
