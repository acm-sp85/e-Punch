class ApplicationController < ActionController::API
  # skip_before_action :verify_authenticity_token

  include ActionController::Cookies

  private

  def coffee_shop

    @coffee_shop ||= CoffeeShop.find_by_id(session[:user_id]) if session[:user_id]
    # @coffee_shop = CoffeeShop.first
  end

end
