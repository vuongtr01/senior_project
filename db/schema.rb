# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_20_221434) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "closets", force: :cascade do |t|
    t.string "category"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_closets_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.datetime "buy_date"
    t.datetime "expr_date"
    t.integer "amount"
    t.string "location"
    t.string "image"
    t.float "price"
    t.bigint "closet_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["closet_id"], name: "index_items_on_closet_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "email", null: false
    t.string "password", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "closets", "users"
  add_foreign_key "items", "closets"
end
