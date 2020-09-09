import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { SettingSchema } from 'src/setting/schema';

export const settingProvider = [
  {
    provide: types.SETTING_MODEL,
    useFactory: () => mongoose.model('Setting', SettingSchema, 'setting'),
    inject: [coreTypes.CONNECTION],
  },
];
