import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import { Lang } from '../lang/models/lang.model';
import { JwtModule } from '@nestjs/jwt'; 

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "1111judakuchlisecretkey",
      signOptions: { expiresIn: '15h' },
    }),
    SequelizeModule.forFeature([Customer, Lang])
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule { }
