class CoffeeShopsController < ApplicationController
  before_action :check_authorization, except: [:create]
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
        if session[:user_id] 
          render json:  CoffeeShop.find_by_id(session[:user_id] ), status: :ok
          else
            render json: {error: "Coffee shop not logged in"} , status: :not_found
          end
  end

  def logged_in
        if session[:user_id] 
            render json: coffee_shop
            
        else
            render json: {error: "User not logged in"}, status: :unauthorized
        end
  end
      



  def create
    coffee_shop = CoffeeShop.create(shop_params)
        if coffee_shop.valid?
        session[:user_id] = coffee_shop.id
        render json: coffee_shop, status: :created
        else
          render json: {errors: coffee_shop.errors.full_messages}, status: :unprocessable_entity 
        end
        
  end
      
  def update
        updated_coffee_shop = @coffee_shop.update(shop_params)
        if updated_coffee_shop

          render json: @coffee_shop, status: :accepted
        else
          render json: {error: "Impossible to update coffee shop"}, status: :unprocessable_entity 
        end
  end
  def destroy
      
      if @coffee_shop.destroy
        head :no_content, status: :ok
      else
        render json: {error: "Impossible to delete coffee shop"}, status: :unprocessable_entity

      end
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
  def check_authorization
        return render json: { error: "must be logged in!"} , status: :unauthorized unless coffee_shop
  end
end
