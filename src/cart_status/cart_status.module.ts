import { Module } from '@nestjs/common';
import { CartStatusService } from './cart_status.service';
import { CartStatusController } from './cart_status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartStatus } from './models/cart_status.model';

@Module({
  imports:[SequelizeModule.forFeature([CartStatus])],
  controllers: [CartStatusController],
  providers: [CartStatusService],
})
export class CartStatusModule {}
