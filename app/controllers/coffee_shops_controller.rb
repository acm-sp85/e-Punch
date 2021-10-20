class CoffeeShopsController < ApplicationController
    def index
        shops = CoffeeShop.all
        render json: shops, each_serializer: CoffeeShopSerializer
      end

      def show
        shop = CoffeeShop.find(params[:id])
        render json: shop, status: :ok
      end

      def create
        shop = CoffeeShop.create!(shop_params)
        render json: shop, status: :created

    end






      private

      def shop_params
        params.permit(:id, :name, :address, :description, :contact, :user_name)
      end
      
end
