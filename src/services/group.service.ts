import { Group } from "../models/group.model";

export const all = async () => await Group.findAll();

export const add = async ({ description }: IGroup) => await Group.create({ description });

export const destroy = async (id: number) => await Group.destroy({ where: { id } });

export const update = async (id: number, { description }: IGroup) => {
    const group = await Group.findByPk(id);
    if (group) return group.update({ description });
    return false;
};