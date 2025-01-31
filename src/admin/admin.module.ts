import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './model/admin.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "1111judakuchlisecretkey",
      signOptions: { expiresIn: '15h' },
    }),
    SequelizeModule.forFeature([Admin])
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule { }
