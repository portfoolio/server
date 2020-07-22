import { Document } from 'mongoose';

export interface AboutInterface extends Document {
  readonly title: string,
  readonly description: string,
}
