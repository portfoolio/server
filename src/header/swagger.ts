import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HeaderModule } from 'src/header/module';

export const headerSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Header Module')
    .setDescription('Header Module API')
    .setVersion('1.0')
    .addTag('header')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [HeaderModule] });

  return { path: 'header', document };
};
