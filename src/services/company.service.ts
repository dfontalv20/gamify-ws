import { Company } from "../models/company.model";

export const all = async () => await Company.findAll();

export const add = async (data: ICompany) => await Company.create(data as any);

export const destroy = async (id: number) => await Company.destroy({ where: { id } });

export const update = async (id: number, data: ICompany) => {
    const company = await Company.findByPk(id);
    if (company) return company.update(data);
    return false;
};