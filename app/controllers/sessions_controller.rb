class SessionsController < ApplicationController
include CurrentUserConcern


    def create
      coffee_shop = CoffeeShop
              .find_by(user_name: params["user_name"])
              # .try(:authenticate, params["coffee_shop"]["password"])
  
      if coffee_shop&.authenticate(params[:password])
        session[:coffee_shop_id] = coffee_shop.id
        render json: coffee_shop, status: :ok

      else
        render json: { error: "Invalid username or password"} , status: :unauthorized
      end
    end

    def logged_in
        if session[:coffee_shop_id] 
            render json: {
                logged_in: true,
                coffee_shop: coffee_shop_id
            }
        else
            render json: {error: "moscatel"}, status: :unauthorized
        end
    end


    def logout
      # reset_session
        session.delete :coffee_shop_id
        render json: { status: 200, logged_out: true}
    end



  end