import { NestExpressApplication } from '@nestjs/platform-express';
import { headerSwagger } from 'src/header/swagger';
import { SwaggerModule } from '@nestjs/swagger';
import { securitySwagger } from 'src/security/swagger';
import { aboutSwagger } from 'src/about/swagger';
import { serviceSwagger } from 'src/service/swagger';

export const swagger = (app: NestExpressApplication): void => {
  [
    securitySwagger(app),
    headerSwagger(app),
    aboutSwagger(app),
    serviceSwagger(app),
  ].map(({ path, document }) => SwaggerModule.setup(`swagger/${path}`, app, document));
};
