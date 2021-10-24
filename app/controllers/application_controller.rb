class ApplicationController < ActionController::API
  # skip_before_action :verify_authenticity_token

  include ActionController::Cookies

  private

  def current_coffe_shop
    @current_coffe_shop ||= CoffeeShop.find_by_id(session[:coffee_shop_id])
  end

end
