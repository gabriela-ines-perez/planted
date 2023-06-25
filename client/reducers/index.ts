import { combineReducers } from 'redux'

import plants from './plants'
import extplants from './extplants'

export default combineReducers({
  plants,
  extplants,
})
