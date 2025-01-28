import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscountCouponService } from './discount_coupon.service';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';

@Controller('discount-coupon')
export class DiscountCouponController {
  constructor(private readonly discountCouponService: DiscountCouponService) {}

  @Post()
  create(@Body() createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountCouponService.create(createDiscountCouponDto);
  }

  @Get()
  findAll() {
    return this.discountCouponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountCouponService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountCouponDto: UpdateDiscountCouponDto) {
    return this.discountCouponService.update(+id, updateDiscountCouponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountCouponService.remove(+id);
  }
}
