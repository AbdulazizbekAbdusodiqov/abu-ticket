import { PartialType } from '@nestjs/swagger';
import { CreateEventTypeDto } from './create-event_type.dto';

export class UpdateEventTypeDto extends PartialType(CreateEventTypeDto) {}
