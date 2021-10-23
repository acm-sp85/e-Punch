class SessionsController < ApplicationController
include CurrentUserConcern

end
    def create
      coffee_shop = CoffeeShop
              .find_by(user_name: params["coffee_shop"]["user_name"])
              .try(:authenticate, params["coffee_shop"]["password"])
  
      if coffee_shop
        session[:coffee_shop] = coffee_shop.id
        render json: {
          status: :created,
          logged_in: true,
          coffee_shop: coffee_shop
        }
      else
        render json: { status: 401 }
      end
    end

    def logged_in
        if @current_user
            render json: {
                logged_in: true.
                coffee_shop: @current_user
            }
        else
            render json: {
                legged_in: false
            }
        end
    end


    def logout
        reset_session
        render json: { status: 200, logged_out: true}
    end
  end