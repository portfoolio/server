import { NestExpressApplication } from '@nestjs/platform-express';
import { headerSwagger } from 'src/header/swagger';
import { SwaggerModule } from '@nestjs/swagger';
import { securitySwagger } from 'src/security/swagger';
import { aboutSwagger } from 'src/about/swagger';
import { serviceSwagger } from 'src/service/swagger';
import { contactSwagger } from 'src/contact/swagger';
import { counterSwagger } from 'src/counter/swagger';
import { journeySwagger } from 'src/journey/swagger';
import { projectSwagger } from 'src/project/swagger';

export const swagger = (app: NestExpressApplication): void => {
  [
    securitySwagger(app),
    headerSwagger(app),
    aboutSwagger(app),
    serviceSwagger(app),
    contactSwagger(app),
    counterSwagger(app),
    journeySwagger(app),
    projectSwagger(app),
  ].map(({ path, document }) => SwaggerModule.setup(`swagger/${path}`, app, document));
};
