export interface ExtPlantData {
  common_name: string
  id: number
  species: string
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

export type ExtPlant = {
  id: number
  common_name: string
  image: string
}

export type ExtPlantAction =
  | { type: 'RECIEVE_EXTPLANT'; payload: ExtPlant[] }
  | { type: 'REQUEST_EXTPLANTS'; payload: null }
  | { type: 'SHOW_ERROR'; payload: string }
  | { type: 'RECIEVE_A_EXTPLANT'; payload: ExtPlantData }
