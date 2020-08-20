import mongooseSchema from 'src/core/util/mongooseSchema';

export const aboutSchema = {
  title: {
    type: String,
    default: 'About Me'
  },
  description: {
    type: String,
    default: ''
  },
};

export const AboutSchema = mongooseSchema(aboutSchema);
