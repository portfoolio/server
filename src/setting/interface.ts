import { Document } from 'mongoose';

export interface SettingInterface extends Document {
  readonly title: string,
  readonly description: string,
}
