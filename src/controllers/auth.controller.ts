import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/user.model";


export const login = async (req: Request, res: Response) => {
    const { password, username } = req.body;
    try {
        const user = await User.unscoped().findOne({ where: { username }, attributes: ['username', 'password', 'id'] });
        if (!user) return res.status(401).json({ status: 401, message: 'Usuario no encontrado.' });
        const passwordCorrect = await bcrypt.compare(password? password : '', user.password);
        if (passwordCorrect) {
            const token = jwt.sign(
                { id: user.id },
                process.env.API_KEY!,
                { expiresIn: process.env.TOKEN_EXPIRES_IN },
            );
            return res.status(200).json({ token });
        }
        return res.status(401).json({ message: 'Usuario o contraseña son incorrectos.' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ status: 400, message: 'No se pudo iniciar sesión' });
    }
};

export const user = async (req: Request, res: Response) => {

    try {
        if(req.headers.authorization === undefined) return res.status(401);
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken: any = jwt.verify(token, process.env.API_KEY!);
        const user = await User.findByPk(decodedToken.id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }

}