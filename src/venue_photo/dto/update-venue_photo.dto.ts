import { PartialType } from '@nestjs/swagger';
import { CreateVenuePhotoDto } from './create-venue_photo.dto';

export class UpdateVenuePhotoDto extends PartialType(CreateVenuePhotoDto) {
    venueId?: number
    url?: string
}
