class PunchCardsController < ApplicationController
    def index
        cards = PunchCard.all
        render json: cards, each_serializer: PunchCardSerializer
      end

      def show
        punch = PunchCard.find(params[:id])
        render json: punch, status: :ok
      end

      def create
        punch = PunchCard.create!(punch_params)
        render json: punch, status: :created

    end






      private

      def punch_params
        params.permit(:id, :coffee_shop_id, :customer_id)
      end
end
