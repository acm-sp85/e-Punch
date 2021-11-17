class SessionsController < ApplicationController
# include CurrentUserConcern
  skip_before_action :check_authorization, only: :create

    def create
      coffee_shop = CoffeeShop.find_by(user_name: params[:user_name])
        if coffee_shop&.authenticate(params[:password])
          session[:user_id] = coffee_shop.id
          render json: coffee_shop, status: :ok
          # byebug

        else
          render json: { error: "Invalid username or password"} , status: :unauthorized
        end
    end

    def logout
        session[:user_id] = nil
        render json: { status: 200, logged_out: true}
    end



  end