import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Company } from "./company.model";
import { Student } from "./student.model";

@Table
export class Group extends Model {
    @Column({
        allowNull: false,
        unique: true
    })
    description: string

    @HasMany(()=> Company)
    companies: Company[]

    @HasMany(() => Student)
    students: Student[]
}