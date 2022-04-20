import express from 'express';
const router = express.Router();
import auth from '../middlewares/authBearerJwt';
import * as authController from '../controllers/auth.controller';

router.post('/login', authController.login);
router.get('/user', auth(), authController.user);

export default router;