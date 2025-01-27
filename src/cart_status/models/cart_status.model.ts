import { Column, DataType, Model, Table } from "sequelize-typescript";


interface ICartStatusCreationAttr {
    name: string
}

@Table({ tableName: "cart_status" })
export class CartStatus extends Model<CartStatus, ICartStatusCreationAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;


    @Column({
        type: DataType.STRING,
    })
    name: string
}
