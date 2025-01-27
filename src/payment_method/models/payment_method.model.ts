import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IPaymentMethodCreationAttr{
    name:string
}

@Table({tableName:"payment_method"})
export class PaymentMethod extends Model<PaymentMethod, IPaymentMethodCreationAttr> {
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
