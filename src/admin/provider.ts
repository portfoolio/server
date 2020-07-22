import * as mongoose from 'mongoose';
import { types } from './types';
import AdminSchema from 'src/admin/schema';

export const adminProvider = [
  {
    provide: types.ADMIN_MODEL,
    useFactory: () => mongoose.model('Admin', AdminSchema, 'admin'),
    inject: [types.CONNECTION],
  },
];
