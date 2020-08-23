import { Document } from 'mongoose';

export interface JourneyInterface extends Document {
  readonly title: string,
  readonly items: [],
}

export interface JourneyHeaderInterface extends Document {
  readonly title: string;
  readonly description: string;
}

export interface JourneyItemInterface extends Document {
  readonly title: string,
  readonly subtitle: string,
  readonly description: string,
}
