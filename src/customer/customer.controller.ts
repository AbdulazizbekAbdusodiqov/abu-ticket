import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { AdminGuard } from '../guards/admin.guard';
import { CustomerGuard } from '../guards/customer.guard';
import { CustomerSelfGuard } from '../guards/customer-self.guard';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }
  @UseGuards(AdminGuard)
  @Get()
  findAll() {
    return this.customerService.findAll();
  }
  
  @UseGuards(CustomerSelfGuard)
  @UseGuards(CustomerGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.customerService.findOne(+id);
  }
  @UseGuards(CustomerSelfGuard)
  @UseGuards(CustomerGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }
  
  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.customerService.remove(+id);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.customerService.login(body)
  }
}
