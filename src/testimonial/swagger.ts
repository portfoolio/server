import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ProjectModule } from 'src/project/module';

export const projectSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Project Module')
    .setDescription('Project Module API')
    .setVersion('1.0')
    .addTag('project')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [ProjectModule] });

  return { path: 'project', document };
};
