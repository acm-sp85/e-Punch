class CoffeeShopSerializer < ActiveModel::Serializer
  attributes :id,  :name, :address, :description, :contact, :user_name

  has_many :punch_cards
  has_many :customers, through: :punch_cards

end