import { Table, Model, ForeignKey, PrimaryKey, Column, Unique, CreatedAt, BelongsTo } from 'sequelize-typescript'
import { Reward } from './reward.model'
import { Student } from './student.model'

@Table({
    createdAt: true,
    updatedAt: false,
})
export class StudentRewards extends Model {
    @BelongsTo(() => Student)
    student: Student
    @BelongsTo(() => Reward)
    reward: Reward

    @ForeignKey(() => Student)
    @Column({ primaryKey: false, unique: false })
    studentId: number

    @ForeignKey(() => Reward)
    @Column({ primaryKey: false, unique: false })
    rewardId: number
}