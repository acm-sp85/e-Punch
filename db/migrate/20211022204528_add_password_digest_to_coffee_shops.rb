class AddPasswordDigestToCoffeeShops < ActiveRecord::Migration[6.1]
  def change
    add_column :coffee_shops, :password_digest, :string
  end
end
