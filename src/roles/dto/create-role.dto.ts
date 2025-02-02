import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({ example: "ADMIN" })
    value: string;
    @ApiProperty({ example: "test" })
    description: string
}

