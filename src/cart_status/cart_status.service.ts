import { Injectable } from '@nestjs/common';
import { CreateCartStatusDto } from './dto/create-cart_status.dto';
import { UpdateCartStatusDto } from './dto/update-cart_status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CartStatus } from './models/cart_status.model';

@Injectable()
export class CartStatusService {


  constructor(
    @InjectModel(CartStatus)
    private cartStatusModel: typeof CartStatus
  ) { }

  async create(createCartStatusDto: CreateCartStatusDto) {
    try {
      const newCartStatus = await this.cartStatusModel.create(createCartStatusDto)
      return { message: "created", newCartStatus }

    } catch (error) {
      return { error: error.message }
    }
  }

  findAll() {
    try {
      return this.cartStatusModel.findAll()
    } catch (error) {
      return { error: error.message }
    }
  }

  async findOne(id: number) {
    try {

      const cartStatus = await this.cartStatusModel.findByPk(id)
      if (!cartStatus?.dataValues) {
        return { message: "cart status not found" }
      }

      return cartStatus
    } catch (error) {
      return { error: error.message }
    }
  }

  async update(id: number, updateCartStatusDto: UpdateCartStatusDto) {
    try {

      const cartStatus = await this.cartStatusModel.findByPk(id)
      if (!cartStatus?.dataValues) {
        return { message: "cart status not found" }
      }

      await cartStatus.update({ ...updateCartStatusDto })

      return { message: "updated", cartStatus }

    } catch (error) {
      return { error: error.message }
    }
  }

  async remove(id: number) {
    try {

      const cartStatus = await this.cartStatusModel.findByPk(id)
      if (!cartStatus?.dataValues) {
        return { message: "cart status not found" }
      }

      await cartStatus.destroy()

      return { message: "success deleted" }

    } catch (error) {
      return { error: error.message }
    }
  }
}
