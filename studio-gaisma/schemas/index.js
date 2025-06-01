// Import all schema files
import about from './about'
import homepage from './home'
import music from './music'
import videos from './videos'
import performance from './performance'
import press from './press'
import curation from './curation'

// Export the schema types array
export const schemaTypes = [
  // Page content schemas
  homepage,
  about,
  music,
  videos,
  performance,
  press,
  curation,
]

// Export individual schemas if needed elsewhere
export {
  about,
  homepage,
  music,
  videos,
  performance,
  press,
  curation,
}