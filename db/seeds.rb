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

Tag.create!(sku: 'modern_notPicky', description: 'New Age/Modern - Not Picky',group: "modern")
Tag.create!(sku: 'modern_dreamyClassical', description: 'Modern Dreamy Classical Piano',group: "modern")
Tag.create!(sku: 'modern_newAge', description: 'New Age Piano',group: "modern")

Tag.create!(sku: 'electronic_notPicky', description: "Electronic Music - I'm Not Picky",group: "electronic")
Tag.create!(sku: 'electronic_active', description: 'Electronic - Active/High Energy/Groovy',group: "electronic")
Tag.create!(sku: 'electronic_dark', description: 'Electronic - Dark, Atmospheric',group: "electronic")
Tag.create!(sku: 'electronic_dark', description: 'Electronic - Uplifting',group: "electronic")

Tag.create!(sku: 'sounds_notPicky', description: "Non-musical sounds - I'm Not Picky",group: "sounds")
Tag.create!(sku: 'sounds_whiteNoise', description: 'White Noise',group: "sounds")
Tag.create!(sku: 'sounds_rainForest', description: 'Rain Forest',group: "sounds")
Tag.create!(sku: 'sounds_ocean', description: 'Ocean',group: "sounds")
Tag.create!(sku: 'sounds_storm', description: 'Rain & Storms',group: "sounds")
Tag.create!(sku: 'sounds_flowingWater', description: 'Flowing Water / River',group: "sounds")
