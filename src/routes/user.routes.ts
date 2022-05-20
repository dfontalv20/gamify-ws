import express from 'express';
import validator from '../middlewares/requests/validateRequest';
import * as userRules from '../middlewares/requests/users.request';
import auth from '../middlewares/authBearerJwt';
import * as userController from '../controllers/users.controller';

const userRouter = express.Router();

userRouter.post('', auth(true), validator(userRules.create), userController.add);
userRouter.put('', auth(true), validator(userRules.create), userController.update);
userRouter.get('', auth(true), userController.all);
userRouter.get('/:id', auth(true), userController.find);
userRouter.delete('', auth(true), userController.destroy);
userRouter.post('/:studentId/assignReward/:rewardId', userController.assignReward);

export default userRouter;