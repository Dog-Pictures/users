import { Logger } from '@nestjs/common';
import {NestApplication, NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(3000);
}

bootstrap()
    .then(() => {
      Logger.log('Bootstrap started successfully', NestApplication.name);
    })
    .catch((e) => Logger.error(e.stack, NestApplication.name));
