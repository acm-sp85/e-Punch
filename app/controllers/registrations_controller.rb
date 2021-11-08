class RegistrationsController < ApplicationController
    def create
        coffee_shop = CoffeeShops.create!(
            user_name: params['coffee_shop']['user_name'],
            password: params['coffee_shop']['password'],
            password_confirmation: params['coffee_shop']['password_confirmation']
             
        )

        if coffee_shop
            session[:user_id] = coffee_shop.id
            render json: {
                status: :created,
                coffee_shop: coffee_shop
            } 
        else
            render json: {status: 500}
        end
    end
end