class CoffeeShopsController < ApplicationController
  before_action :set_coffee_shop, only: [:show, :update, :destroy]
    def index
        shops = CoffeeShop.all
        render json: shops, each_serializer: CoffeeShopSerializer
      end

      def show
        if @coffee_shop 
          render json:  @coffee_shop, status: :ok
          else
            render json: {error: "Coffee shop not found"} , status: :not_found
          end
      end
      
      def create
        shop = CoffeeShop.create!(shop_params)
        render json: shop, status: :created
        
      end
      
      def update
        @coffee_shop.update(shop_params)
        render json: shop, status: :accepted
        
    end
    def destroy
      
      @coffee_shop.destroy
      head :no_content, status: :ok
    end


      private

      def shop_params
        params.require(:coffee_shop).permit(:id, :name, :address, :description, :contact, :user_name)
      end

      def set_coffee_shop
        @coffee_shop = CoffeeShop.find_by(id: params[:id])
      end
      
end
