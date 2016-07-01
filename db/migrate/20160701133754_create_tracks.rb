class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string    :description
      t.string    :source_id
      t.string    :source
      t.string    :content_type
      t.timestamps(null: false)
    end
  end
end
