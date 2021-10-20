class CoffeeShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :description, :contact, :user_name

  def index
    shop = CoffeeShop.all
    render json: shop
  end
end
