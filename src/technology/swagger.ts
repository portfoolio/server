import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TechnologyModule } from 'src/technologie/module';

export const technologieSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Technology Module')
    .setDescription('Technology Module API')
    .setVersion('1.0')
    .addTag('technologie')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [TechnologyModule] });

  return { path: 'technologie', document };
};
