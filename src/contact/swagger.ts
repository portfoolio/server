import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ContactModule } from 'src/contact/module';

export const contactSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Contact Module')
    .setDescription('Contact Module API')
    .setVersion('1.0')
    .addTag('contact')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [ContactModule] });

  return { path: 'contact', document };
};
