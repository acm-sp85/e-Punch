module CurrentUserConcern
    extend ActiveSupport::Concern
included do
    before_action :set_current_user
end

def set_current_user
    if session[:coffee_shop_id]
        @current_user = CoffeeShop.find(session[:coffee_shop_id])

    end
end
end