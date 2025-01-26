import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { SeatType } from './models/seat_type.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SeatTypeService {

  constructor(
    @InjectModel(SeatType) private seatTypeModel: typeof SeatType
  ) { }

  async create(createSeatTypeDto: CreateSeatTypeDto) {

    const newSeatType = await this.seatTypeModel.create(createSeatTypeDto)
    return {message : "seat_type created", newSeatType}
  }

  async findAll() {
    return this.seatTypeModel.findAll()
  }

  async findOne(id: number) {

    const seatType = await this.seatTypeModel.findOne({where:{id}})

    return seatType
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    
    const updateSeatType = await this.seatTypeModel.findByPk(id)
    if(!updateSeatType?.dataValues){
      return {message : "seat type not found"}
    }

    await updateSeatType.update({...updateSeatTypeDto})

    return {updatedSeatType : updateSeatType}
  }

  async remove(id: number) {

    const deleteSeatType = await this.seatTypeModel.destroy(
      {
        where: {id},
      }
    )

    if(!deleteSeatType){
      return {message : "seat type not found"}
    }
    
    return {message : "seat type success deleted"}
  }
}
