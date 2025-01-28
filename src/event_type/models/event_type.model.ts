import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IEventTypeCreationAttr {
    name: string;
}

@Table({ tableName: "event_type" })
export class EventType extends Model<Event, IEventTypeCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING(50)
    })
    name: string;
}
