import * as groupService from "../services/group.service";
import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
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
