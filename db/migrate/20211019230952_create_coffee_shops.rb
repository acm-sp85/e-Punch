class CreateCoffeeShops < ActiveRecord::Migration[6.1]
  def change
    create_table :coffee_shops do |t|
      t.string :name
      t.string :address
      t.string :description
      t.string :contact
      t.string :user_name

      t.timestamps
    end
  end
end
