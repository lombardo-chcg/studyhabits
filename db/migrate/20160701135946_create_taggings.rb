class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer   :tag_id
      t.integer   :track_id
      t.timestamps(null: false)
    end
  end
end
