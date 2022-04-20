import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        validationResult(req).throw();
        next();
    } catch (errors) {
        return res.status(422).json({errors});
    }
}