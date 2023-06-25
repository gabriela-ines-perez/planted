import connection from './connection'

const db = connection

export async function getAllPlants() {
  return await db('plants').select('*')
}

export async function addPlant(data) {
  const plant = await db('plants').insert(data).returning('*')
  return plant
}

export async function delaPlant(id: number) {
  console.log('db func', id)
  return await db('plants').where({ id }).del()
}


