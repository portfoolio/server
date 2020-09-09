import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TestimonialModule } from 'src/testimonial/module';

export const testimonialSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Testimonial Module')
    .setDescription('Testimonial Module API')
    .setVersion('1.0')
    .addTag('testimonial')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [TestimonialModule] });

  return { path: 'testimonial', document };
};
