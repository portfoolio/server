import { Document } from 'mongoose';

export interface ProjectInterface extends Document {
  readonly title: string,
  readonly subtitle: string,
  readonly image: string,
}

export interface ProjectHeaderInterface extends Document {
  readonly title: string;
  readonly description: string;
}
