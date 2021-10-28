class SessionsController < ApplicationController
# include CurrentUserConcern


    def create
      coffee_shop = CoffeeShop.find_by(user_name: params[:user_name])
              if coffee_shop&.authenticate(params[:password])
        session[:shop_id] = coffee_shop.id
        render json: coffee_shop, status: :ok

      else
        render json: { error: "Invalid username or password"} , status: :unauthorized
      end
    end

    def logout
        session[:shop_id] = nil
        render json: { status: 200, logged_out: true}
    end



  end