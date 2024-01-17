import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({type: VersioningType.URI});

  const config = new DocumentBuilder().setTitle("Nest API")
    .setDescription(" the description")
    .setVersion("1.0")
    .build();
  app.useGlobalPipes(new ValidationPipe());

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/", app, document);

  await app.listen(3000);
}
bootstrap();
