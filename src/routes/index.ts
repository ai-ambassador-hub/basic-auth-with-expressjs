import express from 'express'
import basicAuth from '../middlewares/auth.middleware'

const router = express.Router()

// Welcome route
router.get('/', (req, res) => {
  res.send('Welcome to My Node App')
})

// Health check route
router.get('/health', (req, res) => {
  res.status(200).send('OK')
})

// Protected route example
router.get('/protected', basicAuth, (req, res) => {
  res.send('This is a protected route')
})

export default router
