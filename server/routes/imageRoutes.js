import express from 'express'
import { generateImage } from '../controllers/imageController.js'
import userAuth from '../middlewares/auth.js'


const imgaeRouter  = express.Router()

imgaeRouter.post('/generate-image', userAuth, generateImage)

export default imgaeRouter