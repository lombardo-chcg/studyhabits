module TagHelper
  def get_grouped_tags
    tags = Tag.all.to_a.map(&:serializable_hash)
    tags.group_by { |tag| tag["group"] }
  end
end
