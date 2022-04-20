import { Company } from "../models/company.model";

export const all = async () => await Company.findAll();

export const add = async (data: ICompany) => await Company.create(data);

export const destroy = async (id: number) => await Company.destroy({ where: { id } });

export const update = async (id: number, data: ICompany) => {
    const company = await Company.findByPk(id);
    if (Company) return Company.update(data);
    return false;
};