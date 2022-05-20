import express from 'express';
import validator from '../middlewares/requests/validateRequest';
import * as groupRules from '../middlewares/requests/groups.request';
import auth from '../middlewares/authBearerJwt';
import * as groupController from '../controllers/group.controller';

const userRouter = express.Router();

userRouter.post('', auth(true), validator(groupRules.create), groupController.add);
userRouter.get('', auth(true), groupController.all);
userRouter.get('/:id', auth(true), groupController.find);
userRouter.delete('', auth(true), groupController.destroy);

export default userRouter;