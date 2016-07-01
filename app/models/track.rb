class Track < ActiveRecord::Base
  has_many  :taggings
  has_many  :tags, through: :taggings, source: :tag
  has_many  :favings
end
