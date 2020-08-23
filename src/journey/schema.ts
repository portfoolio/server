import * as mongoose from 'mongoose';
import mongooseSchema from 'src/core/util/mongooseSchema';

export const journeySchema = {
  title: String,
  items: [{
    type: mongoose.Schema.ObjectId,
    ref: 'JourneyItem'
  }]
};

export const JourneySchema = mongooseSchema(journeySchema);

export const journeyHeaderSchema = {
  title: {
    type: String,
    default: 'My Journey',
  },
  description: {
    type: String,
    default: '',
  },
};

export const JourneyHeaderSchema = mongooseSchema(journeyHeaderSchema);

export const journeyItemsSchema = {
  title: String,
  subtitle: String,
  description: String,
};

export const JourneyItemsSchema = mongooseSchema(journeyItemsSchema);
