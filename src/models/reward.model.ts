import { Column, Model, Table } from "sequelize-typescript";

@Table({
    timestamps: false
})
export class Reward extends Model {
    @Column({
        unique: true,
        allowNull: false
    })
    name: string
    @Column
    ecoins: number
    @Column
    photo: string
}