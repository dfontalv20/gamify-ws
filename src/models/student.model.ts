import { Table, Column, Model, HasOne, BelongsTo, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript'
import { Company } from './company.model'
import { Group } from './group.model'
import { StudentPrize } from './student_prizes.model'
import { StudentReward } from './student_rewards.model'
import { User } from './user.model'

@Table({
    timestamps: false
})
export class Student extends Model {
    @Column({
        allowNull: false,
        defaultValue: 0
    })
    ecoins: number
    @HasOne(() => User)
    user: User

    @Column({ allowNull: false })
    @ForeignKey(() => Group)
    groupId: number

    @BelongsTo(() => Group)
    group: Group

    @ForeignKey(() => Company)
    companyId: number

    @BelongsTo(() => Company)
    company: Company
    @HasMany(() => StudentReward)
    rewards: StudentReward[]
    @HasMany(() => StudentPrize)
    prizes: StudentPrize[]
}