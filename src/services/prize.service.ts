import { IPrize } from "../interfaces";
import { Prize } from "../models/prize.model";
import { Student } from "../models/student.model";
import { StudentPrize } from "../models/student_prizes.model";
import { User } from "../models/user.model";

export const all = async () => await Prize.findAll();

export const add = async (data: IPrize) => await Prize.create(data as any);

export const destroy = async (id: number) => await Prize.destroy({ where: { id } });

export const update = async (id: number, data: IPrize) => {
    const prize = await Prize.findByPk(id);
    if (prize) return prize.update(data);
    return false;
};

export const unconfirmedPurchases = async () => await StudentPrize.findAll(
    {
        where: { confirmed: false },
        attributes: ['id', 'confirmed', 'createdAt'],
        include: [
            {
                model: Student,
                include: [
                    {
                        model: User.unscoped(),
                        attributes: ['id', 'name']
                    }
                ]
            },
            {
                model: Prize,
            }
        ]
    }
);

export const confirmPurchase = async (id: number) => {
    const purchase = await StudentPrize.findByPk(id);
    if (!purchase) return false;
    return await purchase.update({ confirmed: true });
}

export const denyPurchase = async (id: number) => {
    const purchase = await StudentPrize.findByPk(id, { include: [Prize, Student] });
    if (!purchase) return false;
    purchase.student.ecoins += purchase.prize.ecoins;
    await purchase.student.save();
    await purchase.destroy();
    return true;
}