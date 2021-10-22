class ApplicationController < ActionController::API
  include ActionController::Cookies

  private

  def current_coffe_shop
    CoffeeShop.first
  end

end
