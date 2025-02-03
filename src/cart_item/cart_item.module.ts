import { Module } from '@nestjs/common';
import { CartItemService } from './cart_item.service';
import { CartItemController } from './cart_item.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartItem } from './models/cart_item.model';
import { Cart } from '../cart/models/cart.model';

@Module({
  imports : [SequelizeModule.forFeature([CartItem, Cart])],
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule {}
