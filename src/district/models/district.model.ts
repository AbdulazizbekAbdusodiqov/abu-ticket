import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Region } from "../../region/model/region.model";
import { Venue } from "../../venue/model/venue.model";


interface IDistrictCreationAttr {
    name: string,
    regionId: number
}

@Table({ tableName: "district" })
export class District extends Model<District, IDistrictCreationAttr> {

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


    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
        onDelete: "Restrict"
    })
    regionId: number

    @BelongsTo(() => Region)
    region: Region

    @HasMany(() => Venue)
    venue: Venue[]
}
