import { Request, Response } from "express";
import * as prizeService from "../services/prize.service";

export const add = async (req: Request, res: Response) => {
    try {
        return res.status(201).json(await prizeService.add(req.body));
    } catch (error) {
        res.status(400);
    }
}

export const all = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await prizeService.all());
    } catch (error) {
        res.status(400);
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await prizeService.destroy(+req.params.id));
    } catch (error) {
        res.status(400);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await prizeService.update(+req.params.id, req.body));
    } catch (error) {
        res.status(400);
    }
}

export const unconfirmedPurchases = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(await prizeService.unconfirmedPurchases());
    } catch (error) {
        res.status(400);
    }
}

export const confirmPurchase = async (req: Request, res: Response) => {
    try {
        if(!+req.params.purchaseId) return res.status(400);   
        const confirmed = prizeService.confirmPurchase(+req.params.purchaseId);
        if (!confirmed) return res.status(400).json({ message: 'No se pudo aprobar la compra.' });
        return res.status(200).json(confirmed);
    } catch (error) {
        res.status(400);
    }
}

export const denyPurchase = async (req: Request, res: Response) => {
    try {
        if(!+req.params.purchaseId) return res.status(400);  
        const denied = prizeService.denyPurchase(+req.params.purchaseId);
        if (!denied) return res.status(400).json({ message: 'No se pudo denegar la compra.' });
        return res.status(200).json();
    } catch (error) {
        res.status(400);
    }
}