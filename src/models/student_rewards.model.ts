import { Table, Model, ForeignKey, Column, BelongsTo } from 'sequelize-typescript'
import { Reward } from './reward.model'
import { Student } from './student.model'

@Table({
    createdAt: true,
    updatedAt: false,
})
export class StudentReward extends Model {
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