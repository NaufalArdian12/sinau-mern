import express from 'express'
import { helloWorld } from '../controllers/globalController'

const globalRoutes = express.Router()

globalRoutes.get('/hello-world', helloWorld)

export default globalRoutes