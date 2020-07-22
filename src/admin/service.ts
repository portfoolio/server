import * as mongoose from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { types } from './types';
import { AdminInterface } from 'src/admin/interface';

@Injectable()
export class AdminService {
  constructor(
    @Inject(types.ADMIN_MODEL) private readonly adminModel: mongoose.Model<AdminInterface>,
  ) {}

  async findByEmail(email: string): Promise<any> {
    return await this.adminModel.findOne({ email });
  }

  async findById(id: string): Promise<any> {
    return await this.adminModel.findById(id);
  }
}
