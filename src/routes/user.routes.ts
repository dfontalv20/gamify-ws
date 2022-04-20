import express from 'express';
const router = express.Router();
import * as userController from '../controllers/users.controller';
import auth from '../middlewares/authBearerJwt';
import * as userValidator from '../middlewares/validators/users';

router.post('', auth(), userValidator.addUser, userController.add);
router.get('', auth(true), userController.all);
router.delete('', auth(true), userValidator.deleteUser, userController.destroy);

export default router;