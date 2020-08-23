import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { JourneyHeaderSchema, JourneyItemsSchema, JourneySchema } from 'src/journey/schema';

export const journeyProvider = [
  {
    provide: types.JOURNEY_MODEL,
    useFactory: () => mongoose.model('Journey', JourneySchema, 'journey'),
    inject: [coreTypes.CONNECTION],
  },
  {
    provide: types.JOURNEY_HEADER_MODEL,
    useFactory: () => mongoose.model('JourneyHeader', JourneyHeaderSchema, 'journeyHeader'),
    inject: [coreTypes.CONNECTION],
  },
  {
    provide: types.JOURNEY_ITEM_MODEL,
    useFactory: () => mongoose.model('JourneyItem', JourneyItemsSchema, 'journeyItems'),
    inject: [coreTypes.CONNECTION],
  },
];
