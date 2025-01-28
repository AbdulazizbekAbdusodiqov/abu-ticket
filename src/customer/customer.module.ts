import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import { Lang } from 'src/lang/models/lang.model';

@Module({
  imports : [SequelizeModule.forFeature([Customer, Lang])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
