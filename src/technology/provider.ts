import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { TechnologyHeaderSchema, TechnologySchema } from 'src/technology/schema';

export const technologyProvider = [
  {
    provide: types.TECHNOLOGY_MODEL,
    useFactory: () => mongoose.model('Technology', TechnologySchema, 'technology'),
    inject: [coreTypes.CONNECTION],
  },
  {
    provide: types.TECHNOLOGY_HEADER_MODEL,
    useFactory: () => mongoose.model('TechnologyHeader', TechnologyHeaderSchema, 'technologyHeader'),
    inject: [coreTypes.CONNECTION],
  },
];
