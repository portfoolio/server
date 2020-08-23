import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JourneyModule } from 'src/journey/module';

export const journeySwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Journey Module')
    .setDescription('Journey Module API')
    .setVersion('1.0')
    .addTag('journey')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [JourneyModule] });

  return { path: 'journey', document };
};
