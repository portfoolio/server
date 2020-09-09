import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TechnologyModule } from 'src/technology/module';

export const technologySwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Technology Module')
    .setDescription('Technology Module API')
    .setVersion('1.0')
    .addTag('technology')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [TechnologyModule] });

  return { path: 'technology', document };
};
