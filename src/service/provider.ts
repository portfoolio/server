import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { ServiceSchema } from 'src/service/schema';

export const serviceProvider = [
  {
    provide: types.SERVICE_MODEL,
    useFactory: () => mongoose.model('Service', ServiceSchema, 'service'),
    inject: [coreTypes.CONNECTION],
  },
];
