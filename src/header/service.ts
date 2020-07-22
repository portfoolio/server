import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/header/types';
import { HeaderInterface } from 'src/header/interface';
import { headerSchema } from 'src/header/schema';

@Injectable()
export class HeaderService implements CrudInterface {
  constructor(@Inject(types.HEADER_MODEL) private readonly headerModel: mongoose.Model<HeaderInterface>) {}

  async create(data) {
    return (new this.headerModel(data)).save();
  }

  async update(data) {
    let header = await this.headerModel.findById(data.id);
    for (let k in Object.keys(headerSchema)) {
      header[k] = data[k];
    }

    return header.save();
  }

  async delete(id) {
    return await this.headerModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.headerModel.findById(id);
  }

  async list() {
    return this.headerModel.find({});
  }
}
