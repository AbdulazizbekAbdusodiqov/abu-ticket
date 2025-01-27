import { Injectable } from '@nestjs/common';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DeliveryMethod } from './models/delivery_method.model';

@Injectable()
export class DeliveryMethodService {

  constructor(
    @InjectModel(DeliveryMethod)
    private deliveryMethodModel: typeof DeliveryMethod
  ) { }

  async create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    try {
      const newDelveryMethod = await this.deliveryMethodModel.create(createDeliveryMethodDto)

      return { message: "delivery method created", newDelveryMethod }

    } catch (error) {
      return { error: error.message }
    }
  }

  findAll() {
    try {
      return this.deliveryMethodModel.findAll()
    } catch (error) {
      return { error: error.message }
    }
  }

  async findOne(id: number) {
    try {
      const deliveryMethod = await this.deliveryMethodModel.findByPk(id)
      if (!deliveryMethod) {
        return { message: "delivery method not found" }
      }
      return deliveryMethod

    } catch (error) {
      return { error: error.message }
    }
  }

  async update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    try {
      const deliveryMethod = await this.deliveryMethodModel.findByPk(id)
      if (!deliveryMethod) {
        return { message: "delivery method not found" }
      }
      await deliveryMethod.update({ ...updateDeliveryMethodDto })

      return { message: "updated", deliveryMethod }
    } catch (error) {
      return { error: error.message }
    }
  }

  async remove(id: number) {
    try {
      const deliveryMethod = await this.deliveryMethodModel.findByPk(id)
      if (!deliveryMethod) {
        return { message: "delivery method not found" }
      }
      await DeliveryMethod.destroy()

      return { message: "delivery method success deleted"}
    } catch (error) {
      return { error: error.message }
    }
  }
}
