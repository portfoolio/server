import { Document } from 'mongoose';

export interface ServiceInterface extends Document {
  readonly title: string,
  readonly description: string,
  readonly icon: string,
}

export interface ServiceHeaderInterface extends Document {
  readonly title: string;
  readonly description: string;
}
