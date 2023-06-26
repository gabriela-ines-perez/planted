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
  console.log('routes', id)
  await db.delaPlant(id)
  res.sendStatus(204)
})

// router.patch('/:id', async (req, res) => {
//   const id = Number(req.params.id)
//   const data = req.body
//   const post = await db.updatePost(id, data)
//   res.json(post)
// })

// router.post('/:postId/comments', async (req, res) => {
//   const postId = Number(req.params.postId)
//   const data = req.body
//   const newComment = await db.createComment(postId, data)
//   res.json(newComment)
// })

export default router
