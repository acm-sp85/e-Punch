class CustomersController < ApplicationController
  before_action :set_customer, only: [:show, :update, :destroy]
    def index
        customers = Customer.all
        render json: customers, each_serializer: CustomerSerializer
      end

 

      def show
        if @customer 
          render json: @customer, status: :ok
          else
            render json: {error: "Customer not found"} , status: :not_found
          end
      end

      def create
        customer = Customer.create!(customer_params)
        render json: customer, status: :created

    end

    def update
      @customer.update(customer_params)
      render json: customer, status: :accepted
      
  end
  
  def destroy
      
    @customer.destroy
    head :no_content, status: :ok
  end





      private

      def customer_params
        params.require(:customer).permit(:id, :name, :contact, :user_name)
      end

      def set_customer
        @customer = Customer.find_by(id: params[:id])
      end
end
