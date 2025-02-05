import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Region } from "../../region/model/region.model";
import { Customer } from "../../customer/models/customer.model";
import { District } from "../../district/models/district.model";

interface ICustomerAddressAtr{
    customerId:number,
    name:string,
    regionId:number,
    districtId:number,
    street:string,
    house:string,
    flat:number,
    location:string,
    post_index:number,
    info:string
}


@Table({ tableName: "customer_address" })
export class CustomerAddress extends Model<
  CustomerAddress,
  ICustomerAddressAtr
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  street: string;

  @Column({
    type: DataType.STRING,
  })
  house: string;

  @Column({
    type: DataType.INTEGER,
  })
  flat: number;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.INTEGER,
  })
  post_index: number;

  @Column({
    type: DataType.STRING,
  })
  info: string;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @BelongsTo(() => Region)
  region: Region;


  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;

  @BelongsTo(() => District)
  district: District;
}
