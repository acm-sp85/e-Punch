class CoffeeShopsController < ApplicationController
  before_action :set_coffee_shop, only: [:show, :update, :destroy, :show_customers, :show_punch_cards,:password, :password_confirmation]
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
      
      def show_profile
        if session[:coffee_shop] 
          render json:  CoffeeShop.find_by_id(session[:coffee_shop_id] ), status: :ok
          else
            render json: {error: "Coffee shop not logged in"} , status: :not_found
          end
      end
      




      def create
        shop = CoffeeShop.create!(shop_params)
        if shop.valid?
        session[:shop_id] = shop.id
        render json: shop, status: :created
        else
          render json: {error: "can you hear me?"}, status: :unprocessable_entity
          # render json: {errors: shop.errors.full_messages}, status: :unprocessable_entity
        end
        
      end
      
      def update
        @coffee_shop.update(shop_params)
        render json: @coffee_shop, status: :accepted
        
    end
    def destroy
      
      @coffee_shop.destroy
      head :no_content, status: :ok
    end


    def show_customers
      
      if @coffee_shop
      render json: @coffee_shop.customers, status: :accepted
    else
      render json: {error: "Coffee shop not found"} , status: :not_found

      end
  end

  
    def show_punch_cards
      
      if @coffee_shop
      render json: @coffee_shop.punch_cards, status: :accepted
    else
      render json: {error: "This coffee shop has no current punch cards"} , status: :not_found

      end
  end


      private

      def shop_params
        params.permit(:id, :name, :address, :description, :contact, :user_name, :password, :password_confirmation)
      end

      def set_coffee_shop
        @coffee_shop = CoffeeShop.find_by(id: params[:id])
      end
      
end
