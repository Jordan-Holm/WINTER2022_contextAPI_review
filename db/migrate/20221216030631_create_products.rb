class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :pname
      t.text :desc
      t.float :price
      t.belongs_to :item_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
