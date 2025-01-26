import { Model, Column, Table, DataType } from "sequelize-typescript";


interface ISeatTypeCreationAttr {
    name: string
}

@Table({ tableName: "seat_type" })
export class SeatType extends Model<SeatType, ISeatTypeCreationAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type:DataType.STRING
    })
    name : string;
}