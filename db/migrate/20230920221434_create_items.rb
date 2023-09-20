class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.datetime :buy_date
      t.datetime :expr_date
      t.integer :amount
      t.string :location
      t.string :image
      t.float :price
      t.references :closet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
