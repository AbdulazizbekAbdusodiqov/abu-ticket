import { PartialType } from '@nestjs/swagger';
import { CreateVenueVenueTypeDto } from './create-venue_venue-type.dto';

export class UpdateVenueVenueTypeDto extends PartialType(CreateVenueVenueTypeDto) {
    venueId: number
    venueTypeId: number
}
