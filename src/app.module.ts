import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { LangModule } from './lang/lang.module';
import { Lang } from './lang/models/lang.model';
import { HumanCategoryModule } from './human_category/human_category.module';
import { HumanCategory } from './human_category/model/human_category.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTRES_HOST,
      username: process.env.POSTRES_USER,
      port: +process.env.POSTRES_PORT,
      password: process.env.POSTRES_PASSWORD,
      database: process.env.POSTRES_DB,
      models: [Lang, HumanCategory],
      autoLoadModels : true,
      sync : {alter:true},
      logging : true
    }),
    LangModule,
    HumanCategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
