import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentMethod } from './models/payment_method.model';

@Injectable()
export class PaymentMethodService {

  constructor(
    @InjectModel(PaymentMethod)
    private paymentMethodModel: typeof PaymentMethod
  ) { }

  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    try {

      const newPaymentMethod = await this.paymentMethodModel.create(createPaymentMethodDto)

      return { message: "payment method created", newPaymentMethod }

    } catch (error) {
      return { error: error.message }
    }
  }

  findAll() {
    try {
      return this.paymentMethodModel.findAll()
    } catch (error) {
      return { error: error.message }
    }
  }

  async findOne(id: number) {
    try {
      const paymentMethod = await this.paymentMethodModel.findOne({ where: { id } })

      if (!paymentMethod?.dataValues) {
        return { message: "payment method not found" }
      }
      return paymentMethod

    } catch (error) {
      return { error: error.message }
    }
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    try {
      const paymentMethod = await this.paymentMethodModel.findOne({ where: { id } })

      if (!paymentMethod?.dataValues) {
        return { message: "payment method not found" }
      }
      await paymentMethod.update(updatePaymentMethodDto)

      return { message: "payment success updated", paymentMethod}
    } catch (error) {
      return { error: error.message }
    }
  }

  async remove(id: number) {
    try {
      const paymentMethod = await this.paymentMethodModel.findOne({ where: { id } })

      if (!paymentMethod?.dataValues) {
        return { message: "payment method not found" }
      }
      await paymentMethod.destroy()

      return { message: "payment success deleted"}
    } catch (error) {
      return { error: error.message }
    }
  }
}
