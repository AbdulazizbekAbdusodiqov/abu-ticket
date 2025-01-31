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
import { EventType } from './event_type/models/event_type.model';
import { EventTypeModule } from './event_type/event_type.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/models/role.model';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { UserRole } from './users/models/user-role.model';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/model/admin.model';
import { Booking } from './booking/model/booking.model';
import { BookingModule } from './booking/booking.module';
import { BookingStatus } from './booking_status/model/booking_status.model';
import { BookingStatusModule } from './booking_status/booking_status.module';
import { DiscountCoupon } from './discount_coupon/model/discount_coupon.model';
import { DiscountCouponModule } from './discount_coupon/discount_coupon.module';
import { Ticket } from './ticket/model/ticket.model';
import { SeatModule } from './seat/seat.module';
import { Seat } from './seat/model/seat.model';
import { Event } from './event/model/event.model';
import { EventModule } from './event/event.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CustomerAddress } from './customer_address/model/customer_address.model';
import { FileModule } from './file/file.module';

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
        EventType,
        Role,
        User,
        UserRole,
        Admin,
        BookingStatus,
        Booking,
        DiscountCoupon,
        Seat,
        Event,
        CustomerAddress
      ],
      autoLoadModels: true,
      sync: {
        alter: true,
        force: false
      },
      logging: false,

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
    EventTypeModule,
    EventModule,
    RolesModule,
    UsersModule,
    AuthModule,
    AdminModule,
    BookingStatusModule,
    BookingModule,
    DiscountCouponModule,
    SeatModule,
    CustomerAddressModule,
    FileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
