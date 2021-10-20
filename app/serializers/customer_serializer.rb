class CustomerSerializer < ActiveModel::Serializer
  attributes :name, :contact, :user_name
  has_many :punch_cards
  # has_many :coffee_shops, through: :punch_cards
end
