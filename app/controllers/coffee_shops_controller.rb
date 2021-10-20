class CoffeeShopsController < ApplicationController
    def index
        shops = CoffeeShop.all
        render json: shops
      end
end
