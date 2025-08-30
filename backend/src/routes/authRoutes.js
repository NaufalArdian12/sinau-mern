import express from 'express';
import { validateRequest } from '../middlewares/validateRequest.js';
import { signUpSchema } from '../utils/schema.js';
import { signUpAction } from '../controllers/authController.js';

const authroutes = express.Router();

authroutes.post('/sign-up', validateRequest(signUpSchema), signUpAction);

export default authroutes;