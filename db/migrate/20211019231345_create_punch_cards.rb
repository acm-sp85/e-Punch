class CreatePunchCards < ActiveRecord::Migration[6.1]
  def change
    create_table :punch_cards do |t|
      t.integer :coffee_shop_id
      t.integer :customer_id

      t.timestamps
    end
  end
end
