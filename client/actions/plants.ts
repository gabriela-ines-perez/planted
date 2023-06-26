import { getPlants, addPlant, delAPlant, plantByID } from '../apis/plants'
import type { ThunkAction } from '../store'
import { Plant, NewPlant, PlantAction } from '../models/plants'

//CONTS//

export const REQUEST_PLANTS = 'REQUEST_PLANTS'
export const RECIEVE_PLANT = 'RECIEVE_PLANT'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_PLANT = 'ADD_PLANT'
export const DELETE_PLANT = 'DELETE_PLANT'
export const FETCH_A_PLANT = 'FETCH_A_PLANT'

//SIMPLE FUCTIONS//

export function requestPlants(): PlantAction {
  return { type: REQUEST_PLANTS, payload: null }
}

export function recievePlants(plants: Plant[]): PlantAction {
  return { type: RECIEVE_PLANT, payload: plants }
}

export function showErr(errorMessage: string): PlantAction {
  return { type: SHOW_ERROR, payload: errorMessage }
}

export function createPlant(plant: NewPlant): PlantAction {
  return { type: ADD_PLANT, payload: plant }
}

export function deleteAPlant(id: number): PlantAction {
  return { type: DELETE_PLANT, payload: id }
}

export function getAPlant(plant: Plant): PlantAction {
  return { type: FETCH_A_PLANT, payload: plant }
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
    return delAPlant(id).catch((err) => {
      dispatch(showErr(err.message))
    })
  }
}

export function addAPlant(plant: NewPlant): ThunkAction {
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
