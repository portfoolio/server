import mongooseSchema from 'src/core/util/mongooseSchema';

export const headerSchema = {
  title: String,
  subtitle: String,
  description: String,
  links: {
    type: Object,
    default: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: ''
    }
  }
};

export const HeaderSchema = mongooseSchema(headerSchema);
