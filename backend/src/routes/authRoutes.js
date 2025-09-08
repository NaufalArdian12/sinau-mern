import express from 'express';
import { validateRequest } from '../middlewares/validateRequest.js';
import { signInSchema, signUpSchema } from '../utils/schema.js';
import { signInAction, signUpAction } from '../controllers/authController.js';

const authroutes = express.Router();

authroutes.post('/sign-up', validateRequest(signUpSchema), signUpAction);
authroutes.post('/sign-in', validateRequest(signInSchema), signInAction);

export default authroutes;