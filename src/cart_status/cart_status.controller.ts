import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartStatusService } from './cart_status.service';
import { CreateCartStatusDto } from './dto/create-cart_status.dto';
import { UpdateCartStatusDto } from './dto/update-cart_status.dto';

@Controller('cart-status')
export class CartStatusController {
  constructor(private readonly cartStatusService: CartStatusService) {}

  @Post()
  create(@Body() createCartStatusDto: CreateCartStatusDto) {
    return this.cartStatusService.create(createCartStatusDto);
  }

  @Get()
  findAll() {
    return this.cartStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartStatusDto: UpdateCartStatusDto) {
    return this.cartStatusService.update(+id, updateCartStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartStatusService.remove(+id);
  }
}
