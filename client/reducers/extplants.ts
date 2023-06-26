import { ExtPlant, ExtPlantAction } from '../models/extplants'

const initialState: ExtPlant[] = []

function extPlantReducer(state = initialState, action: ExtPlantAction) {
  const { type, payload } = action

  switch (type) {
    case 'RECIEVE_EXTPLANT':
      return payload
    case 'RECIEVE_A_EXTPLANT':
      return payload

    default:
      return state
  }
}

export default extPlantReducer
