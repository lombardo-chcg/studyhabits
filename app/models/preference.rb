class Preference < ActiveRecord::Base
  belongs_to  :user
  belongs_to  :tag

  validates :tag_id, uniqueness: { scope: :user_id,
     message: "can only have this tag once" }
end
