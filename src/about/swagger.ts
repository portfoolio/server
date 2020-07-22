import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AboutModule } from 'src/about/module';

export const aboutSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('About Module')
    .setDescription('About Module API')
    .setVersion('1.0')
    .addTag('about')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [AboutModule] });

  return { path: 'about', document };
};
