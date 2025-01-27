import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function start() {
  try {
    const PORT = process.env.PORT ?? 3001
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('Cats example')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addTag('cats')
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);
    await app.listen(PORT, () => {
      console.log("server started at: http://localhost:" + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
