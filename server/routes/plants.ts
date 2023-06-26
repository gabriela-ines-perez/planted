import express from 'express'
import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  const plants = await db.getAllPlants()
  res.json(plants)
})
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const plant = await db.getAPlants(id)
  res.json(plant)
})

router.post('/', async (req, res) => {
  const data = { ...req.body }
  const plant = await db.addPlant(data)
  res.json(plant)
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  await db.delaPlant(id)
  res.sendStatus(204)
})


export default router
