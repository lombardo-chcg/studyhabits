class Track < ActiveRecord::Base
  has_many  :taggings
  has_many  :tags, through: :taggings, source: :tag
  has_many  :favings

  def self.get_content(tag)
    tracks = []
    taggings = Tagging.where(tag_id: Tag.find(tag.id))
    taggings.each do |tagging|
      tracks << tagging.track
    end
    tracks
  end
end
