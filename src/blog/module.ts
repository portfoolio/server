import { Module } from '@nestjs/common';
import { TestimonialController, TestimonialHeaderController } from 'src/testimonial/controller';
import { testimonialProvider } from 'src/testimonial/provider';
import { TestimonialService } from 'src/testimonial/service';

@Module({
  controllers: [TestimonialController, TestimonialHeaderController],
  providers: [
    TestimonialService,
    ...testimonialProvider,
  ],
})

export class TestimonialModule {}
