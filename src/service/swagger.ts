import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ServiceModule } from 'src/service/module';

export const serviceSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Service Module')
    .setDescription('Service Module API')
    .setVersion('1.0')
    .addTag('service')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [ServiceModule] });

  return { path: 'service', document };
};
