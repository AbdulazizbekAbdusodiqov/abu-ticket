import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { toDefaultValue } from "sequelize/types/utils";
import { Cart } from "src/cart/models/cart.model";
import { Lang } from "src/lang/models/lang.model";


interface ICustomerCreationAttr {
    first_name: string
    last_name: string
    phone: string
    password: string
    email: string
    birth_day: string
    gender: string
    langId: number
}

@Table({ tableName: "customer" })
export class Customer extends Model<Customer, ICustomerCreationAttr> {


    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING(30)
    })
    first_name: string

    @Column({
        type: DataType.STRING(30)
    })
    last_name: string

    @Column({
        type: DataType.STRING(30)
    })
    phone: string

    @Column({
        type: DataType.STRING
    })
    password: string

    @Column({
        type: DataType.STRING
    })
    email: string
    
    @Column({
        type: DataType.STRING,
        defaultValue: ""
    })
    hashed_refresh_token: string;
    
    @Column({
        type: DataType.STRING
    })
    birth_day: string

    @Column({
        type: DataType.STRING
    })
    gender: string

    @ForeignKey(() => Lang)
    @Column({
        type: DataType.INTEGER,
        onDelete: "Restrict"
    })
    langId: number

    @BelongsTo(() => Lang)
    lang: Lang

    @HasMany(() => Cart)
    cart: Cart
}
