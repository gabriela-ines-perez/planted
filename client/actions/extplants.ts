import { getExtPlants, getOneExtPlantsById } from '../apis/extplants'
import type { ThunkAction } from '../store'
import { ExtPlant, ExtPlantData } from '../models/extplants'

export type ExtPlantAction =
  | { type: 'RECIEVE_EXTPLANT'; payload: ExtPlant[] }
  | { type: 'REQUEST_EXTPLANTS'; payload: null }
  | { type: 'SHOW_ERROR'; payload: string }
  | { type: 'GET-A-PLANT'; payload: ExtPlantData }

export function requestExtPlants(): ExtPlantAction {
  return { type: 'REQUEST_EXTPLANTS', payload: null }
}

export function recieveExtPlants(plants: ExtPlant[]): ExtPlantAction {
  return { type: 'RECIEVE_EXTPLANT', payload: plants }
}

export function showErr(errorMessage: string): ExtPlantAction {
  return { type: 'SHOW_ERROR', payload: errorMessage }
}

export function recieveAExtPlant(extPlant: ExtPlantData): ExtPlantAction {
  return { type: 'GET-A-PLANT', payload: extPlant }
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
