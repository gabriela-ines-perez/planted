export interface ExtPlantData {
  common_name: string
  id: number
  species: string
  scientific_name: string
  cycle: string
  sunlight: string
  watering: string
}

export type ExtPlant = {
  id: number
  common_name: string
  image: string
}
