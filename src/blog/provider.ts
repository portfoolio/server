import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { BlogHeaderSchema, BlogSchema } from 'src/blog/schema';

export const blogProvider = [
  {
    provide: types.BLOG_MODEL,
    useFactory: () => mongoose.model('Blog', BlogSchema, 'blog'),
    inject: [coreTypes.CONNECTION],
  },
  {
    provide: types.BLOG_HEADER_MODEL,
    useFactory: () => mongoose.model('BlogHeader', BlogHeaderSchema, 'blogHeader'),
    inject: [coreTypes.CONNECTION],
  },
];
