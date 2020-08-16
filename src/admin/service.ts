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

  async createMasterAdmin(): Promise<any> {
    return (new this.adminModel({
      firstName: 'Djordje',
      lastName: 'Stojiljkovic',
      password: 'admin123',
      email: 'djordjestojilljkovic@gmail.com',
    })).save();
  }
}
