import express from 'express';
import auth from '../middlewares/authBearerJwt';
import * as companyController from '../controllers/company.controller';

const companyRouter = express.Router();

companyRouter.post('', companyController.create);
companyRouter.get('/:id', auth(), companyController.find);
companyRouter.delete('/:id', auth(true), companyController.destroy);

export default companyRouter;