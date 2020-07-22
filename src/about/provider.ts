import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { AboutSchema } from 'src/about/schema';

export const aboutProvider = [
  {
    provide: types.ABOUT_MODEL,
    useFactory: () => mongoose.model('About', AboutSchema, 'about'),
    inject: [coreTypes.CONNECTION],
  },
];
