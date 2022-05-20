import { hash } from 'bcrypt';
import { IUser } from '../interfaces';
import { Reward } from '../models/reward.model';
import { Student } from '../models/student.model';
import { StudentRewards } from '../models/student_rewards.model';
import { User } from '../models/user.model';

export const find = async (id: number) => await User.findByPk(id,
    {
        include: {
            model: Student,
            include: [
                {
                    model: StudentRewards,
                    attributes: ['createdAt'],
                    include: [
                        {
                            model: Reward
                        }
                    ]
                }
            ]
        }
    });
export const all = async () => await User.findAll();
export const add = async (data: IUser) => {
    const { name, username, password, groupId } = data;
    let studentId = null;
    if (groupId) {
        const newStudent = await Student.create({ groupId });
        studentId = newStudent.id;
    }
    const hashedPass = await hash(password, 10);
    const newUser = await User.create({ name, username, password: hashedPass, studentId });
    return newUser;
};
export const update = async (id: number, data: IUser) => {
    const user = await User.findByPk(id);
    if (user) {
        return await user.update(data)
    }
}

export const destroy = async (id: number) => {
    const user = await User.findByPk(id);
    if (user) {
        if (user.student) await user.student.destroy();
        await user.destroy();
        return true;
    }
    return false;
}

export const assignReward = async (studentId: number, rewardId: number) => {
    const student = (await User.findByPk(studentId))?.student;
    if (!student) return false;
    const reward = await Reward.findByPk(rewardId);
    if (student && reward) {
        await StudentRewards.create({ studentId: student.id, rewardId: student.id });
        student.ecoins += reward.ecoins;
        student.save();
        return true;
    }
    return false;
}