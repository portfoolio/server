import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BlogModule } from 'src/blog/module';

export const blogSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Blog Module')
    .setDescription('Blog Module API')
    .setVersion('1.0')
    .addTag('blog')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [BlogModule] });

  return { path: 'blog', document };
};
