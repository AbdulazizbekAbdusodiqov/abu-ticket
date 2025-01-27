import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IDeliveryMethodCreastionAttr {
    name: string
}

@Table({ tableName: "delivery_method" })
export class DeliveryMethod extends Model<DeliveryMethod, IDeliveryMethodCreastionAttr> {

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
