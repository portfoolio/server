import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { CounterSchema } from 'src/counter/schema';

export const counterProvider = [
  {
    provide: types.COUNTER_MODEL,
    useFactory: () => mongoose.model('Counter', CounterSchema, 'counter'),
    inject: [coreTypes.CONNECTION],
  },
];
