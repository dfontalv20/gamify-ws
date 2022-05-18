import * as groupService from "../services/group.service";
import { Request, Response } from "express";
import { IGroup } from "../interfaces";

export const add = async (req: Request, res: Response) => {
	try {
		const groupData: IGroup = req.body;
		const group = await groupService.add(groupData);
		res.status(201).json(group);
	} catch (error) {
		res.status(400).send();
	}
};

export const destroy = async (req: Request, res: Response) => {
	try {
		const groupId = req.params.id;
		await groupService.destroy(parseInt(groupId));
		res.status(200).send();
	} catch (error) {
		res.status(400).send();
	}
};
export const all = async (req: Request, res: Response) => {
    try {
		const records = await groupService.all();
        return res.status(200).json(records);
	} catch (error) {
		res.status(400).send();
	}
}

export const find = async (req: Request, res: Response) => {
    try {
		const group = await groupService.find(+req.params.id);
		if (group) return res.status(200).json(group);
        return res.status(404);
	} catch (error) {
		res.status(400).send();
	}
}