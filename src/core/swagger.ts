import { NestExpressApplication } from '@nestjs/platform-express';
import { headerSwagger } from 'src/header/swagger';
import { SwaggerModule } from '@nestjs/swagger';
import { securitySwagger } from 'src/security/swagger';

export const swagger = (app: NestExpressApplication): void => {
  [
    headerSwagger(app),
    securitySwagger(app),
  ].map(({ path, document }) => SwaggerModule.setup(`swagger/${path}`, app, document));
};
