import mongooseSchema from 'src/core/util/mongooseSchema';

export const aboutSchema = {
  title: String,
  description: String,
};

export const AboutSchema = mongooseSchema(aboutSchema);
