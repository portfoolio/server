import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AboutModule } from 'src/about/module';

export const counterSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Counter Module')
    .setDescription('Counter Module API')
    .setVersion('1.0')
    .addTag('counter')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [AboutModule] });

  return { path: 'counter', document };
};
