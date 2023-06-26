import connection from './connection'
import { Plant } from '../../client/models/plants'

const db = connection

export async function getAllPlants() {
  return await db('plants').select('*')
}

export async function getAPlants(id: number) {
  return await db('plants').select('*').where({ id })
}

export async function addPlant(data: Plant) {
  const plant = await db('plants').insert(data).returning('*')
  return plant
}

export async function delaPlant(id: number) {
  return await db('plants').where({ id }).del()
}
