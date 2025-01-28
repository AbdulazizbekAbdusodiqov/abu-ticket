import { PartialType } from '@nestjs/swagger';
import { CreateVenueDto } from './create-venue.dto';

export class UpdateVenueDto extends PartialType(CreateVenueDto) {
    name?: string
    address?: string
    location?: string
    site?: string
    phone?: string
    schema?: string[]
    regionId?: number
    districtId?: number
}
