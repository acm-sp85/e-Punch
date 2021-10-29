class PunchCard < ApplicationRecord
    belongs_to :coffee_shop
    belongs_to :customer

    # has_many :customers, through: :coffee_shops
end
