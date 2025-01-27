import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { LangModule } from './lang/lang.module';
import { Lang } from './lang/models/lang.model';
import { HumanCategoryModule } from './human_category/human_category.module';
import { HumanCategory } from './human_category/model/human_category.model';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { SeatType } from './seat_type/models/seat_type.model';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { VenueType } from './venue_type/models/venue_type.model';
import { TicketStatusModule } from './ticket_status/ticket_status.module';
import { TicketStatus } from './ticket_status/model/ticket_status.model';
import { CartStatusModule } from './cart_status/cart_status.module';
import { CartStatus } from './cart_status/models/cart_status.model';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { PaymentMethod } from './payment_method/models/payment_method.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTRES_HOST,
      username: process.env.POSTRES_USER,
      port: +process.env.POSTRES_PORT,
      password: process.env.POSTRES_PASSWORD,
      database: process.env.POSTRES_DB,
      models: [
        Lang,
        HumanCategory,
        SeatType,
        VenueType,
        TicketStatus,
        CartStatus,
        PaymentMethod
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false
    }),
    LangModule,
    HumanCategoryModule,
    SeatTypeModule,
    VenueTypeModule,
    TicketStatusModule,
    CartStatusModule,
    PaymentMethodModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
