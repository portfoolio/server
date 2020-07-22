import mongooseSchema from 'src/core/util/mongooseSchema';

export const contactSchema = {
  title: String,
  name: String,
  email: String,
  subject: String,
  message: String,
};

export const ContactSchema = mongooseSchema(contactSchema);
