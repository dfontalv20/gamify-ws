import * as userService from "../services/user.service";
import { Request, Response } from "express"
import { IUser } from "../interfaces";

export const find = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await userService.find(+req.params.id));
    } catch (error) {
        return res.status(401);
    }
}
export const all = async (req: Request, res: Response) => {
    try {
        const records = await userService.all();
        return res.status(200).json(records);
    } catch (error) {
        return res.status(401);
    }
};

export const add = async (req: Request, res: Response) => {
    try {
        const data: IUser = req.body;
        const newUser = await userService.add(data);
        return res.status(201).json(newUser).end();
    } catch (error) {
        return res.status(400);
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const data: IUser = req.body;
        const user = await userService.update(+req.params.id, data);
        if (user) return res.status(200).json(user)
        return res.status(404);
    } catch (error) {
        return res.status(400);
    }
};

export const destroy = async (req: Request, res: Response) => {
    try {
        const deleted = await userService.destroy(+req.params.id);
        if (deleted) return res.status(200).json({ message: 'Usuario borrado.' })
        return res.status(500);
    } catch (error) {
        return res.status(400);
    }
};

export const assignReward = async (req: Request, res: Response) => {
    try {
        const studentId = +req.params.studentId;
        const rewardId = +req.params.rewardId;    
        if (!studentId || !rewardId) return res.status(400).send();
        const rewardAssigned = await userService.assignReward(studentId, rewardId);
        if (rewardAssigned) return res.status(201).send();
        return res.status(404).send();
    } catch (error) {
        return res.status(400)
    }
}