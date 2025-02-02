import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsNumber()
    @ApiProperty({ example: 1 })
    readonly userId : number;
    @IsString()
    @ApiProperty({ example: "admin" })
    readonly value: string;
}