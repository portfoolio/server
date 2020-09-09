import { Document } from 'mongoose';

export interface TechnologyInterface extends Document {
  readonly image: string,
}

export interface TechnologyHeaderInterface extends Document {
  readonly title: string;
  readonly description: string;
}
