class ApplicationController < ActionController::API
  # skip_before_action :verify_authenticity_token

  include ActionController::Cookies

  private

  def current_coffe_shop
    CoffeeShop.first
  end

end
