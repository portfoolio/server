import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { ContactSchema } from 'src/contact/schema';

export const contactProvider = [
  {
    provide: types.CONTACT_MODEL,
    useFactory: () => mongoose.model('Contact', ContactSchema, 'contact'),
    inject: [coreTypes.CONNECTION],
  },
];
