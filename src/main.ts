import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Module } from '@nestjs/common';

import * as compression from 'compression';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import { routeExporter } from 'nestjs-route-exporter';

import { swagger } from 'src/core/swagger';
import { ConfigModule } from './core/config/module';
import { MulterModule } from './core/multer/module';
import { HeaderModule } from 'src/header/module';
import { AdminModule } from 'src/admin/module';
import { SecurityModule } from 'src/security/module';
import { AboutModule } from 'src/about/module';
import { ServiceModule } from 'src/service/module';
import { ContactModule } from 'src/contact/module';
import { DatabaseModule } from 'src/core/database/module';
import { AWSModule } from 'src/core/aws/module';
import { CounterModule } from 'src/counter/module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    MulterModule,
    AWSModule,
    AdminModule,
    SecurityModule,
    HeaderModule,
    AboutModule,
    ServiceModule,
    ContactModule,
    CounterModule,
  ]
})

class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(compression());
  app.use(helmet());
  app.use(bodyParser.json());

  swagger(app);

  routeExporter(app, 'http://localhost:3001', 'common', 'api.ts');

  app.enableCors();

  await app.listen(3001);
}

bootstrap();
