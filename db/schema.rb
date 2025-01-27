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

ActiveRecord::Schema.define(version: 2023_02_02_211323) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hike_trails", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "location_id", null: false
    t.text "review"
    t.datetime "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_hike_trails_on_location_id"
    t.index ["user_id"], name: "index_hike_trails_on_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "trail_name"
    t.string "city"
    t.string "state"
    t.string "image_url"
    t.string "difficulty"
    t.string "length"
    t.string "elevation_gain"
    t.string "route_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "account_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "hike_trails", "locations"
  add_foreign_key "hike_trails", "users"
end
