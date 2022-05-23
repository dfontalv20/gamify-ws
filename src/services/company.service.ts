import { Sequelize } from "sequelize-typescript";
import { ICompany } from "../interfaces";
import { Company } from "../models/company.model";
import { Group } from "../models/group.model";
import { Student } from "../models/student.model";
import { User } from "../models/user.model";

export const all = async () => await Company.findAll();

export const add = async (data: ICompany) => await Company.create(data as any);

export const destroy = async (id: number) => await Company.destroy({ where: { id } });

export const update = async (id: number, data: ICompany) => {
    const company = await Company.findByPk(id);
    if (company) return company.update(data);
    return false;
};

export const find = async (id: number) => await Company.findByPk(id, {
    include: [
        {
            model: Group
        },
        {
            model: Student,
            attributes: ['id'],
            include: [{
                model: User,
                attributes: ['name'],
            }]
        },
    ],
})