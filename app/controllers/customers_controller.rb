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
        
    def show_punch_cards
          if @customer
            render json: @customer.punch_cards, status: :ok
          else
            render json: {error: "No punchards to show"}
          end
    end

    def create
          customer = Customer.create(customer_params)
          if customer.valid?
            render json: customer, status: :created
          else
            render json: {errors: customer.errors.full_messages}, status: :unprocessable_entity 
          end
          
    end
        
    def update
          updated_customer = @customer.update(customer_params)
          if updated_customer

            render json: @customer, status: :accepted
          else
            render json: {error: "Impossible to update customer"}, status: :unprocessable_entity 
          end
    end
        
    def destroy
          
        if  @customer.destroy

          head :no_content, status: :ok
        else
          render json: {error: "Impossible to delete customer"}, status: :unprocessable_entity
        end
    end
        
        
    def show_coffee_shops
          if @customer
            render json: @customer.coffee_shops, status: :ok
          end
    end
        
    def find_by_name
          
          @name_to_find = Customer.where("user_name like ?", "%#{params[:user_name]}%")

          if @name_to_find !=[]
            # render json: {message: "User registered in ePunch"}, status: :ok
            render json: @name_to_find[0].id, status: :ok
          else 
              render json: {error: "WRONG EMAIL OR NO CUSTOMER"} , status: :not_found
          end

      end





      private

      def customer_params
        params.require(:customer).permit(:id, :name, :contact, :user_name)
      end

      def set_customer
        # @customer = Customer.find_by(id: params[:id])
        @customer = @coffee_shop.customers.find_by(id: params[:id])

        #I think it was here where Michael wanted to do CoffeeShop.customer.find_by...
      end
      def check_authorization
        return render json: { error: "must be logged in!"} , status: :unauthorized unless coffee_shop
      end


end
