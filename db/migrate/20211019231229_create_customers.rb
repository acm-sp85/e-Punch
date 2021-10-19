class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :contact
      t.string :user_name

      t.timestamps
    end
  end
end
