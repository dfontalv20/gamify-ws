import * as companyService from "../services/company.service";
import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
	try {
		const companyData: ICompany = req.body;
		const company = await companyService.add(companyData);
		res.status(201).json(company);
	} catch (error) {
		res.status(400).send();
	}
};

export const destroy = async (req: Request, res: Response) => {
	try {
		const companyId = req.params.id;
		await companyService.destroy(parseInt(companyId));
		res.status(200).send();
	} catch (error) {
		res.status(400).send();
	}
};
