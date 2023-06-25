import { ExtPlantAction } from '../actions/extplants'
import { ExtPlant, ExtPlantData } from '../models/extplants'

const initialState: ExtPlant[] = []

function extPlantReducer(
  state = initialState,
  action: ExtPlantAction
): ExtPlant[] | ExtPlantData {
  const { type, payload } = action

  switch (type) {
    case 'RECIEVE_EXTPLANT':
      return payload
    case 'GET-A-PLANT':
      return payload

    default:
      return state
  }
}

export default extPlantReducer
