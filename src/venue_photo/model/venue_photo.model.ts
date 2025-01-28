import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Venue } from "src/venue/model/venue.model";


interface IVenuePhotoCreationAttr {
    venueId: number
    url: string
}

@Table({ tableName: "venue_photo" })
export class VenuePhoto extends Model<VenuePhoto, IVenuePhotoCreationAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
        onDelete: "Restrict"
    })
    venueId: number

    @BelongsTo(() => Venue)
    venue: Venue

    @Column({
        type: DataType.STRING
    })
    url: string;

}
