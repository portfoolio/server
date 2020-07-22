import { Document } from 'mongoose';

export interface ContactInterface extends Document {
  readonly title: string,
  readonly name: string,
  readonly email: string,
  readonly subject: string,
  readonly message: string,
}
