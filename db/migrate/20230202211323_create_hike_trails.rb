class CreateHikeTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :hike_trails do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :locate, null: false, foreign_key: true
      t.text :review
      t.datetime :date

      t.timestamps
    end
  end
end
