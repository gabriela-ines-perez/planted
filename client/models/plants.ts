export interface Plant {
  id?: number
  extID?: number
  name: string
  species: string
  image: string
}
export interface NewPlant {
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
  | { type: 'ADD_PLANT'; payload: NewPlant }
  | { type: 'DELETE_PLANT'; payload: number }
  | { type: 'UPDATE_PLANT'; payload: Plant[] }
  | { type: 'FETCH_A_PLANT'; payload: Plant }
