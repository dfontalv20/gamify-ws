import { Request, Response } from "express";
import * as rewardService from "../services/reward.service";

export const add = async (req: Request, res: Response) => {
    try {
        return res.status(201).json(await rewardService.add(req.body));
    } catch (error) {
        res.status(401);
    }
}

export const all = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await rewardService.all());
    } catch (error) {
        res.status(401);
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await rewardService.destroy(+req.params.id));
    } catch (error) {
        res.status(401);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await rewardService.update(+req.params.id, req.body));
    } catch (error) {
        res.status(401);
    }
}