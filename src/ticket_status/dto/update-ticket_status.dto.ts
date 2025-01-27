import { PartialType } from '@nestjs/swagger';
import { CreateTicketStatusDto } from './create-ticket_status.dto';

export class UpdateTicketStatusDto extends PartialType(CreateTicketStatusDto) {}
