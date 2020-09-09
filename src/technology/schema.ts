import mongooseSchema from 'src/core/util/mongooseSchema';

export const technologySchema = {
  image: String,
};

export const TechnologySchema = mongooseSchema(technologySchema);

export const technologyHeaderSchema = {
  title: {
    type: String,
    default: 'Technology',
  },
  description: {
    type: String,
    default: 'Technology',
  },
};

export const TechnologyHeaderSchema = mongooseSchema(technologyHeaderSchema);
