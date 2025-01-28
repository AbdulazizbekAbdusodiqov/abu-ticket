import { Module } from '@nestjs/common';
import { LangController } from './lang.controller';
import { LangService } from './lang.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lang } from './models/lang.model';
import { Customer } from 'src/customer/models/customer.model';

@Module({
  imports: [SequelizeModule.forFeature([Lang, Customer])],
  controllers: [LangController],
  providers: [LangService],
})
export class LangModule {}
