import { PartialType } from '@nestjs/mapped-types';
import { CreateHumanCategoryDto } from './create-human_category.dto';

export class UpdateHumanCategoryDto extends PartialType(CreateHumanCategoryDto) {}
