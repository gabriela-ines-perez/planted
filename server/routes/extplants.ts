import express from 'express'
import request from 'superagent'

// NEW .env
import path from 'path'
import dotenv from 'dotenv'
const envPath = path.join(__dirname, '../.env')
dotenv.config({ path: envPath })

const router = express.Router()

router.get('/', (req, res) => {
  request
    .get(
      `https://perenual.com/api/species-list?key=${process.env.PLANT_KEY}&indoor=1`
    )
    .then((plant) => {
      return res.json(plant.body.data)
    })
    .catch((err) => console.log('PLANT API error: ', err.message))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  request
    .get(
      `https://perenual.com/api/species/details/${id}?key=${process.env.PLANT_KEY}`
    )
    .then((plant) => {
      return res.json(plant.body)
    })
    .catch((err) => console.log('PLANT API error: ', err.message))
})

export default router
