import { PartialType } from '@nestjs/mapped-types';
import { CreateHumanCategoryDto } from './create-human_category.dto';

export class UpdateHumanCategoryDto extends PartialType(CreateHumanCategoryDto) {
    name: string;
    start_age: number;
    finish_age: number;
    gender: string
}
