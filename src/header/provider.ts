import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { HeaderSchema } from 'src/header/schema';

export const headerProvider = [
  {
    provide: types.HEADER_MODEL,
    useFactory: () => mongoose.model('Header', HeaderSchema, 'header'),
    inject: [coreTypes.CONNECTION],
  },
];
