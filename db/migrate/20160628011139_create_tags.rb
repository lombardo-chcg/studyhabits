class CreateTags < ActiveRecord::Migration
  def change
    create_table  :tags do |t|
      t.string    :description
      t.string    :sku
      t.string    :group
      t.timestamps(null: false)
    end
  end
end
