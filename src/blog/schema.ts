import mongooseSchema from 'src/core/util/mongooseSchema';

export const blogSchema = {
  title: {
    type: String,
    default: '',
  },
  description: String,
  thumbnail: String,
  image: String,
  content: String,
};

export const BlogSchema = mongooseSchema(blogSchema);

export const blogHeaderSchema = {
  title: {
    type: String,
    default: 'Blog',
  },
  description: {
    type: String,
    default: 'Latest blog posts',
  },
};

export const BlogHeaderSchema = mongooseSchema(blogHeaderSchema);
