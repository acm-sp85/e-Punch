class PunchCardSerializer < ActiveModel::Serializer
  attributes :customer_name, :coffee_shop_name, :id
  # belongs_to :coffee_shop
  # belongs_to :customer

  def customer_name
    object.customer.name
  end

  def coffee_shop_name
    object.coffee_shop.name
  end

end
