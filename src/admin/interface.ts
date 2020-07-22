import { Document } from 'mongoose';

export interface AdminInterface extends Document {
  readonly username: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly email: string;
}
