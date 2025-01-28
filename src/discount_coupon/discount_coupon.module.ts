import { Module } from '@nestjs/common';
import { DiscountCouponService } from './discount_coupon.service';
import { DiscountCouponController } from './discount_coupon.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DiscountCoupon } from './model/discount_coupon.model';

@Module({
  imports:[SequelizeModule.forFeature([DiscountCoupon])],
  controllers: [DiscountCouponController],
  providers: [DiscountCouponService],
})
export class DiscountCouponModule {}
