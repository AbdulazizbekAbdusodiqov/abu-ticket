import { BelongsTo, BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Venue } from "src/venue/model/venue.model";
import { VenueVenueType } from "src/venue_venue-type/models/venue_venue-type.model";

interface IVenueTypeCreationAttr {
    name: string
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<VenueType, IVenueTypeCreationAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @BelongsToMany(() => Venue, () => VenueVenueType)
    venues: Venue[]
}
