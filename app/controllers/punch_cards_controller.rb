class PunchCardsController < ApplicationController
    def index
        cards = PunchCard.all
        render json: cards
      end
end
