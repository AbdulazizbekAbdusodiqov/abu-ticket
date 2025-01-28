import { Model, Table } from "sequelize-typescript";


interface ICartItemCreationAttr{

}

@Table({tableName:"cart_item"})
export class CartItem extends Model<CartItem, ICartItemCreationAttr> {
    
}
