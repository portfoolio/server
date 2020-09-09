import { Document } from 'mongoose';

export interface TestimonialInterface extends Document {
  readonly comment: string,
  readonly author: string,
}

export interface TestimonialHeaderInterface extends Document {
  readonly title: string;
}
