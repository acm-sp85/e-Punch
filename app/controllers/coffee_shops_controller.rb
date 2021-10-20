class CoffeeShopsController < ApplicationController
    def index
        shops = CoffeeShop.all
        render json: shops, each_serializer: CoffeeShopSerializer
      end
end
