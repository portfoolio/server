import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { ServiceHeaderSchema, ServiceSchema } from 'src/service/schema';

export const serviceProvider = [
  {
    provide: types.SERVICE_MODEL,
    useFactory: () => mongoose.model('Service', ServiceSchema, 'service'),
    inject: [coreTypes.CONNECTION],
  },
  {
    provide: types.SERVICE_HEADER_MODEL,
    useFactory: () => mongoose.model('ServiceHeader', ServiceHeaderSchema, 'serviceHeader'),
    inject: [coreTypes.CONNECTION],
  },
];
