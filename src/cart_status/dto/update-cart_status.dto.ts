import { PartialType } from '@nestjs/swagger';
import { CreateCartStatusDto } from './create-cart_status.dto';

export class UpdateCartStatusDto extends PartialType(CreateCartStatusDto) {}
