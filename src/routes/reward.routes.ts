import express from 'express';
import validator from '../middlewares/requests/validateRequest';
import * as rewardRules from '../middlewares/requests/reward.request';
import auth from '../middlewares/authBearerJwt';
import * as rewardController from '../controllers/reward.controller';

const rewardRouter = express.Router();

rewardRouter.post('', auth(true), validator(rewardRules.create), rewardController.add);
rewardRouter.put('', auth(true), validator(rewardRules.create), rewardController.update);
rewardRouter.get('', auth(true), rewardController.all);
rewardRouter.delete('', auth(true), rewardController.destroy);

export default rewardRouter;