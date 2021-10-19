class CoffeeShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :description, :contact, :user_name
end
