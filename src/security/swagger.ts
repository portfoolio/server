import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SecurityModule } from 'src/security/module';

export const securitySwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Security Module')
    .setDescription('Security Module API')
    .setVersion('1.0')
    .addTag('security')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [SecurityModule],
  });

  return { path: 'security', document };
};
