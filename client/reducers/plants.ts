import { PlantAction, Plant } from '../models/plants'

const initialState: Plant[] = []

function plantReducer(state = initialState, action: PlantAction) {
  const { type, payload } = action

  switch (type) {
    case 'RECIEVE_PLANT':
      return payload
    case 'ADD_PLANT':
      return [...state, payload]
    case 'DELETE_PLANT':
      return state.filter((plant) => plant.id !== payload)
    case 'FETCH_A_PLANT':
      return payload

    default:
      return state
  }
}

export default plantReducer
