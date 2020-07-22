import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/about/types';
import { AboutInterface } from 'src/about/interface';
import { aboutSchema } from 'src/about/schema';

@Injectable()
export class AboutService implements CrudInterface {
  constructor(@Inject(types.HEADER_MODEL) private readonly aboutModel: mongoose.Model<AboutInterface>) {}

  async create(data) {
    return (new this.aboutModel(data)).save();
  }

  async update(data) {
    let about = await this.aboutModel.findById(data.id);
    for (let k in Object.keys(aboutSchema)) {
      about[k] = data[k];
    }

    return about.save();
  }

  async delete(id) {
    return await this.aboutModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.aboutModel.findById(id);
  }

  async list() {
    return this.aboutModel.find({});
  }
}
