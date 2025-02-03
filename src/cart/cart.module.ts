import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { Customer } from '../customer/models/customer.model';
import { CartStatus } from '../cart_status/models/cart_status.model';

@Module({
  imports : [SequelizeModule.forFeature([Cart, Customer, CartStatus])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
