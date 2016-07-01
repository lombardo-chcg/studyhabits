class Track < ActiveRecord::Base
  has_many  :taggings
  has_many  :tags, through: :taggings, source: :tag
  has_many  :favings

  def self.get_content(tag)
    tracks = []
    if tag.sku == 'no_preferences'
      taggings = Tagging.where(tag_id: (1..(Tag.all.length-1)))
    else
      taggings = Tagging.where(tag_id: Tag.find(tag.id))
    end  
    taggings.each do |tagging|
      tracks << tagging.track
    end
    tracks
  end
end
