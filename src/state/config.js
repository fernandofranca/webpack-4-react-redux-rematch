import stuff from './models/stuff'
import another from './models/another'

import stuffMiddleware from './middlewares/stuffMiddleware'

export default {
  models: {
    stuff,
    another,
  },
  redux: {
    middlewares: [ stuffMiddleware ]
  }
}