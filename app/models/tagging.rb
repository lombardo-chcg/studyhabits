class Tagging < ActiveRecord::Base
  belongs_to  :tag
  belongs_to  :track

  validates :track_id, :tag_id, { presence: true }
end
