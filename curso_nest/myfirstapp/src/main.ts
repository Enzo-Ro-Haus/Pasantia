import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common' 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  //Se establece las validaciones DTO en todo el proyecto
  await app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //De esta forma no acepta los campos no establecidos en el DTO
  })); 
}
bootstrap();
