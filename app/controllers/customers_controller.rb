class CustomersController < ApplicationController
    def index
        customers = Customer.all
        render json: customers, each_serializer: CustomerSerializer
      end
end
