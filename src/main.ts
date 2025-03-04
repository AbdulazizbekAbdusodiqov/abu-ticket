import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { CustomerValidationPipe } from './pipe/validation.pipe';


async function start() {
  try {
    const PORT = process.env.PORT ?? 3001
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
      new ValidationPipe(),
    );
    // app.useGlobalPipes(new CustomerValidationPipe());

    const config = new DocumentBuilder()
      .setTitle('API  example')
      .setDescription('The API description')
      .addBearerAuth()
      .setVersion('1.0')
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('', app, documentFactory,
      {
        swaggerOptions: { defaultModelsExpandDepth: -1 },
      }
    );

    await app.listen(PORT, () => {
      console.log("server started at: http://localhost:" + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
