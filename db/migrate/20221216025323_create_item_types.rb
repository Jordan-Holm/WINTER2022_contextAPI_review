class CreateItemTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :item_types do |t|
      t.string :iname
      t.text :desc

      t.timestamps
    end
  end
end
