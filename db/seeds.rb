# Content tags

Tag.create!(
  sku: 'no_preferences',
  description: 'No Specific Preferences',
  group: 'no preferences'
  )

Tag.create!(
  sku: 'classical_notPicky',
  description: 'Classical Music - Not Picky',
  group: "classical")
Tag.create!(
  sku: 'classical_quartets',
  description: 'Strings & Chamber Music',
  group: "classical")
Tag.create!(
  sku: 'classical_piano',
  description: 'Classical Piano',
  group: "classical")
Tag.create!(
  sku: 'classical_concerto',
  description: 'Classical Piano + Strings together',
  group: "classical")

Tag.create!(
  sku: 'modern_notPicky',
  description: 'New Age/Modern - Not Picky',
  group: "modern")
Tag.create!(
  sku: 'modern_dreamyClassical',
  description: 'Modern Dreamy Classical Piano',
  group: "modern")
Tag.create!(
  sku: 'modern_newAge',
  description: 'New Age Piano',
  group: "modern")

Tag.create!(
  sku: 'electronic_notPicky',
  description: "Electronic Music - I'm Not Picky",
  group: "electronic")
Tag.create!(
  sku: 'electronic_active',
  description: 'Electronic - Active/High Energy/Groovy',
  group: "electronic")
Tag.create!(
  sku: 'electronic_dark',
  description: 'Electronic - Dark, Atmospheric',
  group: "electronic")
Tag.create!(
  sku: 'electronic_uplifting',
  description: 'Electronic - Uplifting',
  group: "electronic")

Tag.create!(
  sku: 'sounds_notPicky',
  description: "Non-musical sounds - I'm Not Picky",
  group: "sounds")
Tag.create!(
  sku: 'sounds_whiteNoise',
  description: 'White Noise',
  group: "sounds")
Tag.create!(
  sku: 'sounds_rainForest',
  description: 'Rain Forest',
  group: "sounds")
Tag.create!(
  sku: 'sounds_ocean',
  description: 'Ocean',
  group: "sounds")

Tag.create!(
  sku: 'sounds_storm',
  description: 'Rain & Storms',
  group: "sounds")
Tag.create!(
  sku: 'sounds_flowingWater',
  description: 'Flowing Water / River',
  group: "sounds")

  # Content

a = Track.create!(
  description: 'mozart piano sonatas',
  source_id: 'PL6880827AEBBC2645',
  source: 'youtube',
  content_type: 'playlist',
)
a.taggings.create!(tag_id: Tag.find_by(sku: 'classical_notPicky').id)
a.taggings.create!(tag_id: Tag.find_by(sku: 'classical_piano').id)

b = Track.create!(
  description: 'haydn piano sonatas',
  source_id: 'PL2B7B03DC5CF1DBC9',
  source: 'youtube',
  content_type: 'playlist',
)
b.taggings.create!(tag_id: Tag.find_by(sku: 'classical_notPicky').id)
b.taggings.create!(tag_id: Tag.find_by(sku: 'classical_piano').id)

c = Track.create!(
  description: 'mozart piano concertos',
  source_id: 'PL3nRAfd-5mJLyouQqa9yAZ6YYjv3wY5Ec',
  source: 'youtube',
  content_type: 'playlist',
)
c.taggings.create!(tag_id: Tag.find_by(sku: 'classical_notPicky').id)
c.taggings.create!(tag_id: Tag.find_by(sku: 'classical_concerto').id)

d = Track.create!(
  description: 'haydn piano concertos',
  source_id: 'PLUSRfoOcUe4b7Ixkv6zjFs-W1ssHWkRQU',
  source: 'youtube',
  content_type: 'playlist',
)
d.taggings.create!(tag_id: Tag.find_by(sku: 'classical_notPicky').id)
d.taggings.create!(tag_id: Tag.find_by(sku: 'classical_concerto').id)
