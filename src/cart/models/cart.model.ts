import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { CartStatus } from "../../cart_status/models/cart_status.model";
import { Customer } from "../../customer/models/customer.model";


interface ICartCreationAttr{
    customerId:number;
    cart_statusId:number
}

@Table({tableName:"cart"})
export class Cart extends Model<Cart, ICartCreationAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;
    
    @ForeignKey(()=>Customer)
    @Column({
        type:DataType.INTEGER,
    })
    customerId:number;

    @BelongsTo(()=>Customer)
    customer:Customer

    @Column({
        type:DataType.DATE,
    })
    finishedAt: Date | null;

    @ForeignKey(()=>CartStatus)
    @Column({
        type:DataType.INTEGER,
    })
    cart_statusId:number

    @BelongsTo(()=>CartStatus)
    status:CartStatus
    
}
