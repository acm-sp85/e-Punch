class SessionsController < ApplicationController
include CurrentUserConcern


    def create
      user = CoffeeShop
              .find_by(user_name: params["user_name"])
              # .try(:authenticate, params["coffee_shop"]["password"])
  
      if user&.authenticate(params[:password])
        session[:user] = user.id
        render json: user, status: :ok

      else
        render json: { error: "Invalid username or password"} , status: :unauthorized
      end
    end

    def logged_in
        if session[:coffee_shop_id] 
            render json: {
                logged_in: true,
                user: user
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