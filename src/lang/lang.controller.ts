import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LangService } from './lang.service';
import { CreateLangDto } from './dto/create-lang.dto';
import { Lang } from './models/lang.model';
import { UpdateLangDto } from './dto/update-lang.dto';

@Controller('lang')
export class LangController {
    constructor(private readonly langService: LangService) { }

    @Post()
    async createLang(@Body() createLangDto: CreateLangDto): Promise<Lang> {
        return this.langService.createLang(createLangDto)
    }

    @Get()
    async findAllLang(): Promise<Lang[]> {
        return this.langService.findAllLang()
    }

    @Get(":id")
    async findLangById(@Param("id") id: number): Promise<Lang | null> {
        return this.langService.findLangById(id)
    }

    @Patch(":id")
    async updateLangById(
        @Param("id") id: number,
        @Body() updateLangDto: UpdateLangDto): Promise<Lang> {
        return this.langService.updateLangById(id, updateLangDto)
    }

    @Delete(":id")
    async deleteLAngById(
        @Param("id") id: number
    ):Promise<string>{
        return this.langService.deleteLangById(id)
    }

}
