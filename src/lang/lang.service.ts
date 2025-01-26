import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Lang } from './models/lang.model';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';

@Injectable()
export class LangService {
    constructor(@InjectModel(Lang) private langModel: typeof Lang){}

    async createLang (createLangDto : CreateLangDto):Promise<Lang>{
        const newLang = await this.langModel.create(createLangDto)
        return newLang; 
    }

    async findAllLang():Promise<Lang[]>{
        return this.langModel.findAll()
    }

    async findLangById(id:number):Promise<Lang|null>{
        return this.langModel.findOne({where:{id}})
    }
    
    async updateLangById(id:number, updateLangDto:UpdateLangDto):Promise<Lang | null>{
        

        const updatedLang = await this.langModel.update(updateLangDto,{
            where : {id},
            returning :true
        })
        console.log(updatedLang);
        
        return updatedLang[1][0];
    }

    async deleteLangById(id:number):Promise<string>{
        const res = await this.langModel.destroy({where:{id}})
        if(res == 1){
            return `${id}~raqamli til o'chirildi`
        }
        return "jigarim uzur topilmadi"
    }
}
