class CustomersController < ApplicationController
    def index
        customers = Customer.all
        render json: customers, each_serializer: CustomerSerializer
      end

 

      def show
        customer = Customer.find(params[:id])
        render json: customer, status: :ok
      end

      def create
        customer = Customer.create!(customer_params)
        render json: customer, status: :created

    end






      private

      def customer_params
        params.permit(:id, :name, :contact, :user_name)
      end
end
