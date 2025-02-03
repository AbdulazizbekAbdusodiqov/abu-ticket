import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './models/customer.model';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private customerModel: typeof Customer,
    private jwtService: JwtService
  ) { }

  async create(createCustomerDto: CreateCustomerDto) {



    const oldCustomer = await this.customerModel.findOne({ where: { email: createCustomerDto.email } })

    if (oldCustomer?.dataValues) {
      return { message: "customer already exists" }
    }

    const hashed_password = bcrypt.hashSync(createCustomerDto.password, 7)

    const newCustomer = await this.customerModel.create({ ...createCustomerDto, password: hashed_password })

    const tokens = await this.generateToken(newCustomer)

    newCustomer.hashed_refresh_token = tokens.refreshToken

    await newCustomer.save()

    return newCustomer;

  }

  findAll() {
      return this.customerModel.findAll()
  }

  findOne(id: number):Promise<Customer> {
      return this.customerModel.findByPk(id)
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {

      const customer = await this.customerModel.findByPk(id)

      if (!customer?.dataValues) {
        return { message: "customer not found" }
      }

      if (updateCustomerDto.password) {
        updateCustomerDto.password = bcrypt.hashSync(updateCustomerDto.password, 7)
      }

      await customer.update(updateCustomerDto)

      return { message: "updated", customer }
  }

  async remove(id: number) {
      const customer = await this.customerModel.findByPk(id)

      if (!customer?.dataValues) {
        return { message: "customer not found" }
      }

      await customer.destroy()

      return { message: "customer deleted" }

  }
  private async generateToken(customer: Customer) {
    const payload = {
      id: customer.id,
      email: customer.email,
      role: "customer",
    }
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload)
    }
  }
}
