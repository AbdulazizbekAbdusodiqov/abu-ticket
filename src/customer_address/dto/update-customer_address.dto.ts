import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerAddressDto } from './create-customer_address.dto';

export class UpdateCustomerAddressDto extends PartialType(CreateCustomerAddressDto) {}
