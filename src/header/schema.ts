import mongooseSchema from 'src/core/util/mongooseSchema';

export const headerSchema = {
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
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
