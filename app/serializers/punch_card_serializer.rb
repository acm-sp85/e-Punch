class PunchCardSerializer < ActiveModel::Serializer
  attributes :id, :coffee_shop_id, :customer_id
end
