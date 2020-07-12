import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Module } from '@nestjs/common';

import * as compression from 'compression';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';

import { ConfigModule } from './core/config/module';
import { MulterModule } from './core/multer/module';
import { mongoConnectionProvider } from './core/mongoose';

@Module({
  imports: [
    ConfigModule,
    MulterModule,
  ],
  providers: [
    ...mongoConnectionProvider
  ]
})

class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(compression());
  app.use(helmet());
  app.use(bodyParser.json());

  await app.listen(3001);
}

bootstrap();
