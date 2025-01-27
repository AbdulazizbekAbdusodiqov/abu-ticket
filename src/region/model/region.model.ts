import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "src/district/models/district.model";


interface IRegionCreationAttr {
    name: string
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

    @HasMany(()=>District)
    district : District[];
}
