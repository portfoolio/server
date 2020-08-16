import { Document } from 'mongoose';

export interface HeaderInterface extends Document {
  readonly title: string,
  readonly subtitle: string,
  readonly description: string,
  readonly image: string;
  readonly links: object
}
