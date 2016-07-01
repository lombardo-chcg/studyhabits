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

e = Track.create!(
  description: 'mozart string quartets',
  source_id: 'PL-mSV3w33pTTEELPX-KFH2WjWlUFMYKcJ',
  source: 'youtube',
  content_type: 'playlist',
)
e.taggings.create!(tag_id: Tag.find_by(sku: 'classical_notPicky').id)
e.taggings.create!(tag_id: Tag.find_by(sku: 'classical_quartets').id)

f = Track.create!(
  description: 'mozart strings',
  source_id: 'PLYmIAhded4pHYRW3Gz8cI0_r9d1D2DSg8',
  source: 'youtube',
  content_type: 'playlist',
)
f.taggings.create!(tag_id: Tag.find_by(sku: 'classical_notPicky').id)
f.taggings.create!(tag_id: Tag.find_by(sku: 'classical_quartets').id)

g = Track.create!(
  description: 'Best of Debussy ',
  source_id: 'PL310D0B1FA8B9E482',
  source: 'youtube',
  content_type: 'playlist',
)
g.taggings.create!(tag_id: Tag.find_by(sku: 'modern_notPicky').id)
g.taggings.create!(tag_id: Tag.find_by(sku: 'modern_dreamyClassical').id)

h = Track.create!(
  description: ' Erik Satie - Debussy  ',
  source_id: 'PLF-Nta522GPlfxzGxtRClENWUsn95Pc0a',
  source: 'youtube',
  content_type: 'playlist',
)
h.taggings.create!(tag_id: Tag.find_by(sku: 'modern_notPicky').id)
h.taggings.create!(tag_id: Tag.find_by(sku: 'modern_dreamyClassical').id)

j = Track.create!(
  description: 'George Winston ',
  source_id: 'PLIMOnn33pIB1w4i3dRFj8eyBhd2PpUB8p',
  source: 'youtube',
  content_type: 'playlist',
)
j.taggings.create!(tag_id: Tag.find_by(sku: 'modern_notPicky').id)
j.taggings.create!(tag_id: Tag.find_by(sku: 'modern_newAge').id)


k = Track.create!(
  description: 'uplifting electronic ',
  source_id: 'PLF-Nta522GPlMqph6SHU4LnH_3D38kggj',
  source: 'youtube',
  content_type: 'playlist',
)
k.taggings.create!(tag_id: Tag.find_by(sku: 'electronic_notPicky').id)
k.taggings.create!(tag_id: Tag.find_by(sku: 'electronic_uplifting').id)

l = Track.create!(
  description: 'electronic_dark ',
  source_id: 'PLF-Nta522GPkN8Q__yYAmjj8LXW-ptdJm',
  source: 'youtube',
  content_type: 'playlist',
)
l.taggings.create!(tag_id: Tag.find_by(sku: 'electronic_notPicky').id)
l.taggings.create!(tag_id: Tag.find_by(sku: 'electronic_dark').id)

m = Track.create!(
  description: 'electronic_active ',
  source_id: 'PLF-Nta522GPknJpADSB5w5_3JOZ0y7Yoo',
  source: 'youtube',
  content_type: 'playlist',
)
m.taggings.create!(tag_id: Tag.find_by(sku: 'electronic_notPicky').id)
m.taggings.create!(tag_id: Tag.find_by(sku: 'electronic_active').id)

mm = Track.create!(
  description: 'electronic_active ',
  source_id: 'PLF-Nta522GPknJpADSB5w5_3JOZ0y7Yoo',
  source: 'youtube',
  content_type: 'playlist',
)
mm.taggings.create!(tag_id: Tag.find_by(sku: 'electronic_notPicky').id)
mm.taggings.create!(tag_id: Tag.find_by(sku: 'electronic_active').id)

n = Track.create!(
  description: 'electronic_active ',
  source_id: 'PLF-Nta522GPm7vRG_eLVyKsFYb5PJKeEW',
  source: 'youtube',
  content_type: 'playlist',
)
n.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_notPicky').id)
n.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_storm').id)

n = Track.create!(
  description: 'sounds_storm ',
  source_id: 'PLF-Nta522GPm7vRG_eLVyKsFYb5PJKeEW',
  source: 'youtube',
  content_type: 'playlist',
)
n.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_notPicky').id)
n.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_storm').id)

o = Track.create!(
  description: 'sounds_rainForest ',
  source_id: 'PLF-Nta522GPnUgg63UkcsjHyQGsXW_6Wp',
  source: 'youtube',
  content_type: 'playlist',
)
o.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_notPicky').id)
o.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_rainForest').id)

p = Track.create!(
  description: 'sounds_ocean ',
  source_id: 'PLF-Nta522GPmSZ71jhGMOWRPpZlEXo_YC',
  source: 'youtube',
  content_type: 'playlist',
)
p.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_notPicky').id)
p.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_ocean').id)

q = Track.create!(
  description: 'sounds_flowingWater ',
  source_id: 'PLF-Nta522GPk6wg3qRCwJ9VyPAc4ADaji',
  source: 'youtube',
  content_type: 'playlist',
)
q.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_notPicky').id)
q.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_flowingWater').id)

r = Track.create!(
  description: 'sounds_whiteNoise ',
  source_id: 'PLF-Nta522GPnAZGQ9hLcWVV1A6Hz2XDXa',
  source: 'youtube',
  content_type: 'playlist',
)
r.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_notPicky').id)
r.taggings.create!(tag_id: Tag.find_by(sku: 'sounds_whiteNoise').id)
