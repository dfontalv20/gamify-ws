import * as companyService from "../services/company.service";
import { Request, Response } from "express";
import { ICompany } from "../interfaces";

export const create = async (req: Request, res: Response) => {
	try {
		const companyData: ICompany = req.body;
		const company = await companyService.add(companyData);
		res.status(201).json(company);
	} catch (error) {
		res.status(400).send();
	}
};

export const find = async (req: Request, res: Response) => {
	try {
		const companyId = +req.params.id;
		if (!companyId) return res.status(400);
		const company = await companyService.find(companyId);
		res.status(200).json(company);
	} catch (error) {
		res.status(400).send();
	}
}

export const destroy = async (req: Request, res: Response) => {
	try {
		const companyId = +req.params.id;
		if (!companyId) return res.status(400);
		await companyService.destroy(companyId);
		res.status(200).send();
	} catch (error) {
		res.status(400).send();
	}
};
