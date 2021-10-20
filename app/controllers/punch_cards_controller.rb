class PunchCardsController < ApplicationController
    def index
        cards = PunchCard.all
        render json: cards, each_serializer: PunchCardSerializer
      end
end
