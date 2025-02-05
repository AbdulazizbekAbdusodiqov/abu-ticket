import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserRole } from './models/user-role.model';
import { Role } from '../roles/models/role.model';
import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserRole, Role]),
    RolesModule,
    forwardRef(()=>AuthModule)
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports : [UsersService]
})
export class UsersModule { }
