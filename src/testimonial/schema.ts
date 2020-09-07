import mongooseSchema from 'src/core/util/mongooseSchema';

export const projectSchema = {
  title: String,
  subtitle: String,
  image: String,
};

export const ProjectSchema = mongooseSchema(projectSchema);

export const projectHeaderSchema = {
  title: {
    type: String,
    default: 'My Project',
  },
  description: {
    type: String,
    default: '',
  },
};

export const ProjectHeaderSchema = mongooseSchema(projectHeaderSchema);
