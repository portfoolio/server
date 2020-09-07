import mongooseSchema from 'src/core/util/mongooseSchema';

export const technologieSchema = {
  comment: String,
  author: String,
};

export const TechnologySchema = mongooseSchema(technologieSchema);

export const technologieHeaderSchema = {
  title: {
    type: String,
    default: 'Others About Me',
  },
};

export const TechnologyHeaderSchema = mongooseSchema(technologieHeaderSchema);
