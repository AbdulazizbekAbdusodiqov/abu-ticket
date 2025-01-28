import { Injectable } from '@nestjs/common';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';
import { DiscountCoupon } from './model/discount_coupon.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DiscountCouponService {
  constructor(@InjectModel(DiscountCoupon) private discountCoupunModel: typeof DiscountCoupon) {}

  create(createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountCoupunModel.create(createDiscountCouponDto);
  }

  findAll() {
    return this.discountCoupunModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.discountCoupunModel.findByPk(id);
  }

  update(id: number, updateDiscountCouponDto: UpdateDiscountCouponDto) {
     return this.discountCoupunModel.update(updateDiscountCouponDto, {
       where: { id },
       returning: true,
     });
  }

  remove(id: number) {
    return this.discountCoupunModel.destroy({ where: { id } });
  }
}
