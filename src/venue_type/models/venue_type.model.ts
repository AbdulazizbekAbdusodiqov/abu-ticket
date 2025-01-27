import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IVenueTypeCreationAttr{
    name : string
}

@Table({tableName : "venue_type"})
export class VenueType extends Model<VenueType, IVenueTypeCreationAttr> {

    @Column({
        type : DataType.INTEGER,
        autoIncrement: true,
        primaryKey:true
    })
    id:number;
    
    @Column({
        type : DataType.STRING,
    })
    name : string;
}
