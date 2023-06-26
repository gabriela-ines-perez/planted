import { getExtPlants, getOneExtPlantsById } from '../apis/extplants'
import type { ThunkAction } from '../store'
import { ExtPlant, ExtPlantData, ExtPlantAction } from '../models/extplants'

//CONSTS//
export const RECIEVE_EXTPLANT = 'RECIEVE_EXTPLANT'
export const REQUEST_EXTPLANTS = 'REQUEST_EXTPLANTS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const RECIEVE_A_EXTPLANT = 'RECIEVE_A_EXTPLANT'

//SIMPLE FUNCTIONS//
export function requestExtPlants(): ExtPlantAction {
  return { type: REQUEST_EXTPLANTS, payload: null }
}

export function recieveExtPlants(plants: ExtPlant[]): ExtPlantAction {
  return { type: RECIEVE_EXTPLANT, payload: plants }
}

export function showErr(errorMessage: string): ExtPlantAction {
  return { type: SHOW_ERROR, payload: errorMessage }
}

export function recieveAExtPlant(extPlant: ExtPlantData): ExtPlantAction {
  return { type: RECIEVE_A_EXTPLANT, payload: extPlant }
}

//THUNKS//
export function fetchExtPlants(): ThunkAction {
  return (dispatch) => {
    dispatch(requestExtPlants())
    return getExtPlants()
      .then((plants) => {
        dispatch(recieveExtPlants(plants))
      })
      .catch((err) => {
        dispatch(showErr(err.message))
      })
  }
}

export function fetchAnExtPlants(id: number): ThunkAction {
  return (dispatch) => {
    dispatch(requestExtPlants())
    return getOneExtPlantsById(id)
      .then((extPlant) => {
        dispatch(recieveAExtPlant(extPlant))
      })
      .catch((err) => {
        dispatch(showErr(err.message))
      })
  }
}
