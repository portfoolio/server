import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { TestimonialHeaderSchema, TestimonialSchema } from 'src/testimonial/schema';

export const testimonialProvider = [
  {
    provide: types.TESTIMONIAL_MODEL,
    useFactory: () => mongoose.model('Testimonial', TestimonialSchema, 'testimonial'),
    inject: [coreTypes.CONNECTION],
  },
  {
    provide: types.TESTIMONIAL_HEADER_MODEL,
    useFactory: () => mongoose.model('TestimonialHeader', TestimonialHeaderSchema, 'testimonialHeader'),
    inject: [coreTypes.CONNECTION],
  },
];
