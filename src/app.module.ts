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
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { DeliveryMethod } from './delivery_method/models/delivery_method.model';
import { RegionModule } from './region/region.module';
import { Region } from './region/model/region.model';
import { DistrictModule } from './district/district.module';
import { District } from './district/models/district.model';
import { VenueModule } from './venue/venue.module';
import { Venue } from './venue/model/venue.model';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenuePhoto } from './venue_photo/model/venue_photo.model';
import { VenueVenueTypeModule } from './venue_venue-type/venue_venue-type.module';
import { VenueVenueType } from './venue_venue-type/models/venue_venue-type.model';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/models/customer.model';
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/models/cart.model';
import { CartItemModule } from './cart_item/cart_item.module';
import { CartItem } from './cart_item/models/cart_item.model';
import { TicketModule } from './ticket/ticket.module';
import { Ticket } from './ticket/models/ticket.model';
import { EventTypeModule } from './event_type/event_type.module';
import { EventType } from './event_type/models/event_type.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      port: +process.env.POSTGRES_PORT,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Lang,
        HumanCategory,
        SeatType,
        VenueType,
        TicketStatus,
        CartStatus,
        PaymentMethod,
        DeliveryMethod,
        Region,
        District,
        Venue,
        VenuePhoto,
        VenueVenueType,
        Customer,
        Cart,
        CartItem,
        Ticket,
        EventType
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
    PaymentMethodModule,
    DeliveryMethodModule,
    RegionModule,
    DistrictModule,
    VenueModule,
    VenuePhotoModule,
    VenueVenueTypeModule,
    CustomerModule,
    CartModule,
    CartItemModule,
    TicketModule,
    EventTypeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
