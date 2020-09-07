import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { TechnologyHeaderSchema, TechnologySchema } from 'src/technologie/schema';

export const technologieProvider = [
  {
    provide: types.TECHNOLOGY_MODEL,
    useFactory: () => mongoose.model('Technology', TechnologySchema, 'technologie'),
    inject: [coreTypes.CONNECTION],
  },
  {
    provide: types.TECHNOLOGY_HEADER_MODEL,
    useFactory: () => mongoose.model('TechnologyHeader', TechnologyHeaderSchema, 'technologieHeader'),
    inject: [coreTypes.CONNECTION],
  },
];
