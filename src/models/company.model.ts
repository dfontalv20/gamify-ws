import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Group } from "./group.model";
import { Student } from "./student.model";

@Table({
    timestamps: false
})
export class Company extends Model {
    @Column({
        unique: true,
        allowNull: false
    })
    name: string

    @Column
    photo: string

    @HasMany(() => Student)
    students: Student[]

    @ForeignKey(() => Group)
    groupId: number

    @BelongsTo(() => Group)
    group: Group
}