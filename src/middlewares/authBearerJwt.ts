import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.model";

export default (admin = false) => {
    return async function authenticated(req: Request, res: Response, next: NextFunction) {
        try {
            const authorizationHeader = req.get('authorization');
            if (!authorizationHeader) return res.status(401).json({ message: 'Token invalido.' })
            const bearer = authorizationHeader.split(' ')[0];
            const token = authorizationHeader.split(' ')[1];
            const decodedToken: any = jwt.verify(token, process.env.API_KEY!);
            if (bearer === 'Bearer' && decodedToken.id) {
                if (admin) {
                    const authUser = await User.findByPk(decodedToken.id);
                    if (authUser && authUser.student) return res.status(403).json({ message: 'No autorizado.' });
                }
                return next();
            }
            return res.status(401).json({ message: 'Token invalido.' })
        } catch (error) {
            return res.status(401).json({ message: 'Token invalido.' })
        }
    }
}