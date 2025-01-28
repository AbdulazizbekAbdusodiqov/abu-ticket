import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Venue } from "src/venue/model/venue.model"
import { VenueType } from "src/venue_type/models/venue_type.model"


interface IVenueVenueTypeCreationAttr {
    venueId: number
    venueTypeId: number
}

@Table({tableName:"venue_venue_type"})
export class VenueVenueType extends Model<VenueVenueType, IVenueVenueTypeCreationAttr> {

    @ForeignKey(() => Venue)
    @Column({
        type:DataType.INTEGER
    })
    venueId:number

    @ForeignKey(() => VenueType)
    @Column({
        type:DataType.INTEGER
    })
    venueTypeId:number

}
