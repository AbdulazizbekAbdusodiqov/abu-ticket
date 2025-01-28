import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './models/customer.model';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';


@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private customerModel: typeof Customer
  ) { }

  async create(createCustomerDto: CreateCustomerDto) {

    try {


      const oldCustomer = await this.customerModel.findOne({ where: { email: createCustomerDto.email } })

      if (oldCustomer?.dataValues) {
        return { message: "customer already exists" }
      }

      const hashed_password = bcrypt.hashSync(createCustomerDto.password, 7)

      const newCustomer = await this.customerModel.create({ ...createCustomerDto, password: hashed_password })

      return { message: "customer success created", newCustomer }
    } catch (error) {
      console.log(error);
      return { error: error.message }
    }
  }

  findAll() {
    try {
      return this.customerModel.findAll()

    } catch (error) {
      console.log(error);
      return { error: error.message }
    }
  }

  findOne(id: number) {
    try {
      return this.customerModel.findByPk(id)

    } catch (error) {
      console.log(error);
      return { error: error.message }
    }
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    try {

      const customer = await this.customerModel.findByPk(id)

      if (!customer?.dataValues) {
        return { message: "customer not found" }
      }

      if (updateCustomerDto.password) {
        updateCustomerDto.password = bcrypt.hashSync(updateCustomerDto.password, 7)
      }

      await customer.update(updateCustomerDto)

      return { message: "updated", customer }
    } catch (error) {
      console.log(error);
      return { error: error.message }
    }
  }

  async remove(id: number) {
    try {
      const customer = await this.customerModel.findByPk(id)

      if (!customer?.dataValues) {
        return { message: "customer not found" }
      }

      await customer.destroy()

      return {message:"customer deleted"}

    } catch (error) {
      console.log(error);
      return { error: error.message }
    }
  }
}
