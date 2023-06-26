import { getPlants, addPlant, delAPlant, plantByID } from '../apis/plants'
import type { ThunkAction } from '../store'

export type Plant = {
  id: number
  name: string
  species: string
  image: string
  extID: number
}
interface newPlant {
  extId: number
  name: string
  species: string
  common_name: string
  id: number
  scientific_name: string
  cycle: string
  sunlight: string
  watering: string
  default_image: PlantPhoto
  description: string
}
export interface PlantPhoto {
  original_url: string
}

export type PlantAction =
  | { type: 'RECIEVE_PLANT'; payload: Plant[] }
  | { type: 'REQUEST_PLANTS'; payload: null }
  | { type: 'SHOW_ERROR'; payload: string }
  | { type: 'ADD_PLANT'; payload: newPlant }
  | { type: 'DELETE_PLANT'; payload: number }
  | { type: 'UPDATE_PLANT'; payload: Plant[] }
  | { type: 'FETCH_A_PLANT'; payload: Plant }

export function requestPlants(): PlantAction {
  return { type: 'REQUEST_PLANTS', payload: null }
}

export function recievePlants(plants: Plant[]): PlantAction {
  return { type: 'RECIEVE_PLANT', payload: plants }
}

export function showErr(errorMessage: string): PlantAction {
  return { type: 'SHOW_ERROR', payload: errorMessage }
}

export function createPlant(plant: newPlant): PlantAction {
  return { type: 'ADD_PLANT', payload: plant }
}

export function deleteAPlant(id: number): PlantAction {
  console.log('redux action', id)
  return { type: 'DELETE_PLANT', payload: id }
}

export function getAPlant(plant: Plant): PlantAction {
  return { type: 'FETCH_A_PLANT', payload: plant }
}

//THUNKS//

export function fetchAPlant(id: number): ThunkAction {
  return (dispatch) => {
    dispatch(requestPlants())
    return plantByID(id) //api
      .then((plant) => {
        dispatch(getAPlant(plant))
      })
      .catch((err) => {
        dispatch(showErr(err.message))
      })
  }
}

export function deletePlant(id: number): ThunkAction {
  return (dispatch) => {
    dispatch(deleteAPlant(id))
    console.log('thunk', id)
    return delAPlant(id).catch((err) => {
      dispatch(showErr(err.message))
    })
  }
}

export function addAPlant(plant: newPlant): ThunkAction {
  return (dispatch) => {
    return addPlant(plant)
      .then((newPlant) => {
        dispatch(createPlant(newPlant))
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
