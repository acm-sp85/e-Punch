class AddPhotoToCustomers < ActiveRecord::Migration[6.1]
  def change
    add_column :customers, :photo, :string
  end
end
