import express from 'express';
import auth from '../middlewares/authBearerJwt';
import * as authController from '../controllers/auth.controller';

const authRouter = express.Router();

authRouter.post('/login', authController.login);
authRouter.get('/user', auth(), authController.user);

export default authRouter;