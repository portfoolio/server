import mongooseSchema from 'src/core/util/mongooseSchema';

export const testimonialSchema = {
  comment: String,
  author: String,
};

export const TestimonialSchema = mongooseSchema(testimonialSchema);

export const testimonialHeaderSchema = {
  title: {
    type: String,
    default: 'Others About Me',
  },
};

export const TestimonialHeaderSchema = mongooseSchema(testimonialHeaderSchema);
