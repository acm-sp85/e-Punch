class PunchCardsController < ApplicationController
  before_action :check_authorization, except: [:create]
  before_action :set_punch, only: [:show, :update, :destroy]
    def index

      if params[:coffee_shop_id]
        cards = PunchCard.where(coffee_shop_id: params[:coffee_shop_id])
      else
        cards = PunchCard.all
      end
        render json: cards, each_serializer: PunchCardSerializer
      end

      def show
        if @punch 
        render json: @punch, status: :ok
        else
          render json: {error: "Punch card not found"} , status: :not_found
        end
      end

      def create
        punch = PunchCard.create!(punch_params)
        if punch
          render json: punch, status: :created
        else
          render json: {errors: punch.errors.full_messages}, status: :unprocessable_entity 
        end

    end

    def update
      updated_punch_card = @punch.update(punch_params)
      if updated_punch_card
        render json: @punch, status: :accepted
      else
        render json: {error: "Impossible to update punch card"}, status: :unprocessable_entity 
      end
      
    end
    
    
    def destroy
      
      if @punch.destroy

        head :no_content, status: :ok

      else
        render json: {error: "Impossible to delete punch card"}, status: :unprocessable_entity 
      end
    end




      private

      def punch_params
        params.require(:punch_card).permit(:id, :coffee_shop_id, :customer_id, :counter)
      end

      def set_punch
        @punch = PunchCard.find_by(id: params[:id])
      end
      def check_authorization
        return render json: { error: "must be logged in!"} , status: :unauthorized unless coffee_shop
      end


end
