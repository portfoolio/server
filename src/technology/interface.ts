import { Document } from 'mongoose';

export interface TechnologyInterface extends Document {
  readonly comment: string,
  readonly author: string,
}

export interface TechnologyHeaderInterface extends Document {
  readonly title: string;
}
