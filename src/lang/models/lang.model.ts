import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ILangCreationAttr {
    name: string
}

@Table({ tableName: "lang" })
export class Lang extends Model<Lang, ILangCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement:true,
        primaryKey : true
    })
    id:number;

    @Column({
        type :DataType.STRING(50)
    })
    name:string;
}