import express from 'express';
import validator from '../middlewares/requests/validateRequest';
import * as prizeRules from '../middlewares/requests/prize.request';
import auth from '../middlewares/authBearerJwt';
import * as prizeController from '../controllers/prize.controller';

const prizeRouter = express.Router();

prizeRouter.post('', auth(true), validator(prizeRules.create), prizeController.add);
prizeRouter.put('', auth(true), validator(prizeRules.create), prizeController.update);
prizeRouter.get('', auth(), prizeController.all);
prizeRouter.delete('', auth(true), prizeController.destroy);

export default prizeRouter;