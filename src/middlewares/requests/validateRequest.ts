import { NextFunction, Request, Response } from "express";
import Validator from "validatorjs";

export default (rules: Validator.Rules) => {
    return async function (req: Request, res: Response, next: NextFunction) {
        const validator = new Validator(req.body, rules);
        validator.checkAsync(
            () => next(),
            () => res.status(422).json({ errors: validator.errors.all() })
        ) 
        
    }
}