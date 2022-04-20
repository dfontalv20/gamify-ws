import { check } from 'express-validator';
import validateRequest from '../validateRequest';
import { Request, Response, NextFunction } from 'express';
import { minLength, string } from './messages';

const value = 'Usuario';

export const addUser = [
    check('name').isString().withMessage(string(value))
        .isLength({ min: 3 }).withMessage(minLength(value, 3)),

    check('username').isString().withMessage(string(value))
        .isLength({ min: 5 }).withMessage(minLength(value, 5)),

    check('password').isString().withMessage(string(value))
        .isLength({ min: 5 }).withMessage(minLength(value, 5)),

    check('student').isObject().optional(),
    (req: Request, res: Response, next: NextFunction) => validateRequest(req, res, next)
];

export const deleteUser = [
    check('id').isInt(),
    (req: Request, res: Response, next: NextFunction) => validateRequest(req, res, next)
];