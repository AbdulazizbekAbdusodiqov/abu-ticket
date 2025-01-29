import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsNumber()
    readonly userId : number;
    @IsString()
    readonly value: string;
}