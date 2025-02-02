import { ApiProperty } from "@nestjs/swagger";

export class ActivateUserDto {
    @ApiProperty({ example: 1 })
    userId:number
}