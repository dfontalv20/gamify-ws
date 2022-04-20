import { hash } from 'bcrypt';
import { Student } from '../models/student.model';
import { User } from '../models/user.model';

export const all = async () => await User.findAll();

export const add = async (data: IUser) => {
    const { name, username, password, student } = data;

    let studentId = null;
    if (student) {
        const newStudent = await Student.create();
        studentId = newStudent.id;
    }
    const hashedPass = await hash(password, 10);
    const newUser = await User.create({ name, username, password: hashedPass, studentId });
    return newUser;
};

export const destroy = async (id: number) => {
    const user = await User.findByPk(id);
    if (user) {
        if (user.student) await user.student.destroy();
        await user.destroy();
        return true;
    }
    return false;
}