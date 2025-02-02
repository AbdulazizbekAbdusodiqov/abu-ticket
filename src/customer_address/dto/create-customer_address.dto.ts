import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerAddressDto {
  @ApiProperty({example:1})
  customerId: number;
  @ApiProperty({example: "Uzbekistan"})
  name: string;
  @ApiProperty({example: 1})
  regionId: number;
  @ApiProperty({example: 1})
  districtId: number;
  @ApiProperty({example: "nimadir"})
  street: string;
  @ApiProperty({example: "nechidir"})
  house: string;
  @ApiProperty({example: 1})
  flat: number;
  @ApiProperty({example: "lacatsiya"})
  location: string;
  @ApiProperty({example: 1})
  post_index: number;
  @ApiProperty({example: "test"})
  info: string;
}
