import { Document } from 'mongoose';

export interface CounterInterface extends Document {
  readonly title: string,
  readonly number: string,
}
