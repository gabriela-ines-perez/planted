import request from 'superagent'

//EXTERNAL API PLANTS//

export function getExtPlants() {
  return request.get('/api/v1/extplants').then((res) => res.body)
}

export function getOneExtPlantsById(id: number) {
  return request.get(`/api/v1/extplants/${id}`).then((res) => res.body)
}
