import request from 'superagent'
import { NewPlant } from '../models/plants'

export function getPlants() {
  return request.get('/api/v1/plants').then((res) => res.body)
}

export function plantByID(id: number) {
  return request.get(`/api/v1/plants/${id}`).then((res) => res.body)
}

export function addPlant(plant: NewPlant) {
  return request
    .post('/api/v1/plants')
    .send(plant)

    .then((res) => {
      return res.body
    })
}

export function delAPlant(id: number) {
  return request.delete(`/api/v1/plants/${id}`).then((res) => res)
}
