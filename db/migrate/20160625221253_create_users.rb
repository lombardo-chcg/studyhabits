class CreateUsers < ActiveRecord::Migration
  def change
    create_table  :users do |t|
      t.string    :username
      t.string    :email
      t.string    :password_digest
      t.string    :activation_token
      t.boolean   :activated, default: false
      t.datetime  :activation_datetime
      t.timestamps(null: false)
    end
  end
end
