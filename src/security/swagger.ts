import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SecurityModule } from 'src/security/module';

export const securitySwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Auth Module')
    .setDescription('Auth Module API')
    .setVersion('1.0')
    .addTag('auth')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [SecurityModule],
  });

  return { path: 'auth', document };
};
