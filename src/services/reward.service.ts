import { Reward } from "../models/reward.model";
import { IReward } from "../interfaces";

export const all = async () => await Reward.findAll()
export const add = async (data: IReward) => await Reward.create(data as any);
export const update = async (id: number, data: IReward) => {
    const reward = await Reward.findByPk(id);
    if (reward) return await reward.update(data);
};
export const destroy = async (id: number) => {
    const reward = await Reward.findByPk(id);
    if (reward) reward.destroy();
};