import mongooseSchema from 'src/core/util/mongooseSchema';

export const serviceSchema = {
  title: String,
  description: String,
};

export const ServiceSchema = mongooseSchema(serviceSchema);
