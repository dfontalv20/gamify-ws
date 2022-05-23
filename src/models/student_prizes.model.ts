import { Table, Model, ForeignKey, PrimaryKey, Column, Unique, CreatedAt, BelongsTo } from 'sequelize-typescript'
import { Prize } from './prize.model'
import { Reward } from './reward.model'
import { Student } from './student.model'

@Table({
    createdAt: true,
    updatedAt: false,
})
export class StudentPrize extends Model {
    @BelongsTo(() => Student)
    student: Student
    @BelongsTo(() => Prize)
    prize: Prize

    @ForeignKey(() => Student)
    @Column({ primaryKey: false, unique: false })
    studentId: number

    @ForeignKey(() => Prize)
    @Column({ primaryKey: false, unique: false })
    prizeId: number
    @Column({allowNull: false, defaultValue: false})
    confirmed: boolean
}