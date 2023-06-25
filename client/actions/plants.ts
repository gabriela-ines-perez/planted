import { getPlants, addPlant, delAPlant } from '../apis/plants'
import type { ThunkAction } from '../store'

export type Plant = { id: number; name: string; species: string; image: string; extId: number }
export type newPlant = { name: string; species: string }

export type PlantAction =
  | { type: 'RECIEVE_PLANT'; payload: Plant[] }
  | { type: 'REQUEST_PLANTS'; payload: null }
  | { type: 'SHOW_ERROR'; payload: string }
  | { type: 'ADD_PLANT'; payload: Plant }
  | { type: 'DELETE_PLANT'; payload: number }
  | { type: 'UPDATE_PLANT'; payload: Plant[] }

export function requestPlants(): PlantAction {
  return { type: 'REQUEST_PLANTS', payload: null }
}

export function recievePlants(plants: Plant[]): PlantAction {
  return { type: 'RECIEVE_PLANT', payload: plants }
}

export function showErr(errorMessage: string): PlantAction {
  return { type: 'SHOW_ERROR', payload: errorMessage }
}

export function createPlant(plant: Plant): PlantAction {
  return { type: 'ADD_PLANT', payload: plant }
}

export function deleteAPlant(id: number): PlantAction {
  console.log('redux action', id)
  return { type: 'DELETE_PLANT', payload: id }
}

//THUNKS//

export function deletePlant(id: number): ThunkAction {
  return (dispatch) => {
    dispatch(deleteAPlant(id))
    console.log('thunk', id)
    return delAPlant(id).catch((err) => {
      dispatch(showErr(err.message))
    })
  }
}

export function addAPlant(plant: Plant): ThunkAction {
  return (dispatch) => {
    return addPlant(plant)
      .then((newPlant) => {
        // Include the ID from the response in the payload
        const plantWithId = { ...plant, id: newPlant.id }
        dispatch(createPlant(plantWithId))
      })
      .catch((err) => {
        dispatch(showErr(err.message))
      })
  }
}

export function fetchPlants(): ThunkAction {
  return (dispatch) => {
    dispatch(requestPlants())
    return getPlants()
      .then((plants) => {
        dispatch(recievePlants(plants))
      })
      .catch((err) => {
        dispatch(showErr(err.message))
      })
  }
}
