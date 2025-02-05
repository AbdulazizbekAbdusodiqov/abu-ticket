import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { Venue } from "../../venue/model/venue.model";


interface IRegionCreationAttr {
    name: string;
    image:string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, IRegionCreationAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    name: string;
    
    @Column({
        type: DataType.STRING
    })
    image:string;

    @HasMany(()=>District)
    district : District[];

    @HasMany(()=>Venue)
    venue:Venue[]
}
