class AddCounterToPunchCards < ActiveRecord::Migration[6.1]
  def change
    add_column :punch_cards, :counter, :integer
  end
end
