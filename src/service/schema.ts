import mongooseSchema from 'src/core/util/mongooseSchema';

export const serviceSchema = {
  title: String,
  description: String,
  icon: String,
};

export const ServiceSchema = mongooseSchema(serviceSchema);

export const serviceHeaderSchema = {
  title: {
    type: String,
    default: 'My Service',
  },
  description: {
    type: String,
    default: '',
  },
};

export const ServiceHeaderSchema = mongooseSchema(serviceHeaderSchema);
