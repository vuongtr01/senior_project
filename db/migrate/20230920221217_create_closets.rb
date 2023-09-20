class CreateClosets < ActiveRecord::Migration[7.0]
  def change
    create_table :closets do |t|
      t.string :category
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
