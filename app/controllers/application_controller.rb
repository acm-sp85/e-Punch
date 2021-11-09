class ApplicationController < ActionController::API
  # skip_before_action :verify_authenticity_token

  include ActionController::Cookies

  before_action :authorized
  def authorized
    return render json:{error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end

  private

  def coffee_shop

    @coffee_shop ||= CoffeeShop.find_by_id(session[:user_id]) if session[:user_id]

  end

end
