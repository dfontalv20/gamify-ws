import { Column, Model, Table } from "sequelize-typescript";

@Table({
    timestamps: false
})
export class Prize extends Model {
    @Column({
        unique: true,
        allowNull: false
    })
    name: string
    @Column
    description: string
    @Column({ allowNull: false })
    ecoins: number
    @Column
    photo: string
}