class PunchCardsController < ApplicationController
  before_action :set_punch, only: [:show, :update, :destroy]
    def index
        cards = PunchCard.all
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
        render json: punch, status: :created

    end

    def update
      @punch.update(punch_params)
      render json: @punch, status: :accepted
      
    end
    
    
    def destroy
      
      @punch.destroy
      head :no_content, status: :ok
    end




      private

      def punch_params
        params.require(:punch_card).permit(:id, :coffee_shop_id, :customer_id)
      end

      def set_punch
        @punch = PunchCard.find_by(id: params[:id])
      end


end
