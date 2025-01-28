import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscountCouponDto } from './create-discount_coupon.dto';

export class UpdateDiscountCouponDto extends PartialType(CreateDiscountCouponDto) {}
