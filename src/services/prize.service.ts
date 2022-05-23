import { IPrize } from "../interfaces";
import { Prize } from "../models/prize.model";

export const all = async () => await Prize.findAll();

export const add = async (data: IPrize) => await Prize.create(data as any);

export const destroy = async (id: number) => await Prize.destroy({ where: { id } });

export const update = async (id: number, data: IPrize) => {
    const prize = await Prize.findByPk(id);
    if (prize) return prize.update(data);
    return false;
};