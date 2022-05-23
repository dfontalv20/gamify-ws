import { Request, Response } from "express";
import * as prizeService from "../services/prize.service";

export const add = async (req: Request, res: Response) => {
    try {
        return res.status(201).json(await prizeService.add(req.body));
    } catch (error) {
        res.status(401);
    }
}

export const all = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await prizeService.all());
    } catch (error) {
        res.status(401);
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await prizeService.destroy(+req.params.id));
    } catch (error) {
        res.status(401);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await prizeService.update(+req.params.id, req.body));
    } catch (error) {
        res.status(401);
    }
}