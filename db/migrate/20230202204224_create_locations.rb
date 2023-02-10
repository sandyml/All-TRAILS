class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :trail_name
      t.string :city
      t.string :state
      t.string :image_url
      t.string :difficulty
      t.string :length
      t.string :elevation_gain
      t.string :route_type

      t.timestamps
    end
  end
end
