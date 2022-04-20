import { Table, Column, Model, ForeignKey, BelongsTo, DefaultScope } from 'sequelize-typescript'
import { Student } from './student.model'

@DefaultScope(() => ({
    attributes: { exclude: ['password', 'studentId'], },
    include: [Student]
}))

@Table
export class User extends Model {
    @Column
    name: string

    @Column
    username: string

    @Column
    password: string

    @ForeignKey(() => Student)
    @Column
    studentId: number

    @BelongsTo(() => Student, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    student: Student
}