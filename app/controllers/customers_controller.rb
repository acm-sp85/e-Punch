class CustomersController < ApplicationController
  before_action :check_authorization, except: [:create]
  before_action :set_customer, only: [:show, :update, :destroy, :show_punch_cards, :show_coffee_shops]
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
          render json: @customer, status: :accepted
          
        end
        
        def destroy
          
          @customer.destroy
          head :no_content, status: :ok
        end
        
        
        def show_punch_cards
          if @customer
            render json: @customer.punch_cards, status: :ok
          end
        end
        def show_coffee_shops
          if @customer
            render json: @customer.coffee_shops, status: :ok
          end
        end
        
        def find_by_name
          
          @x = Customer.where("user_name like ?", "%#{params[:user_name]}%")

          if @x !=[]
            render json: @x[0], status: :ok
          else 
              render json: {error: "WRONG EMAIL OR NO CUSTOMER"} , status: :not_found
          end

          end





      private

      def customer_params
        params.require(:customer).permit(:id, :name, :contact, :user_name)
      end

      def set_customer
        @customer = Customer.find_by(id: params[:id])
      end
      def check_authorization
        return render json: { error: "must be logged in!"} , status: :unauthorized unless coffee_shop
      end


end
