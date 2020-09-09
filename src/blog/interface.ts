import { Document } from 'mongoose';

export interface BlogInterface extends Document {
  readonly comment: string,
  readonly author: string,
}

export interface BlogHeaderInterface extends Document {
  readonly title: string;
}
