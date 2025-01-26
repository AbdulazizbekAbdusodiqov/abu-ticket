import { Injectable } from '@nestjs/common';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { HumanCategory } from './model/human_category.model';

@Injectable()

export class HumanCategoryService {

  constructor(
    @InjectModel(HumanCategory) private humanCategoryModel: typeof HumanCategory
  ) { }

  create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryModel.create(createHumanCategoryDto)
  }

  findAll() {
    return this.humanCategoryModel.findAll()
  }

  findOne(id: number) {
    return this.humanCategoryModel.findByPk(id)
  }

  async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {

    const human = await this.humanCategoryModel.update(updateHumanCategoryDto, {
      where: { id },
      returning: true
    })

    return human[1][0]
  }

  remove(id: number) {
    return this.humanCategoryModel.destroy({ where: { id } })
  }
}
