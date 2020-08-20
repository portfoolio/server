import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { types } from 'src/about/types';
import { AboutInterface } from 'src/about/interface';
import { aboutSchema } from 'src/about/schema';

@Injectable()
export class AboutService {
  constructor(@Inject(types.ABOUT_MODEL) private readonly aboutModel: mongoose.Model<AboutInterface>) {}

  async update(data) {
    let about = await this.aboutModel.findOne();
    for (let k of Object.keys(aboutSchema)) {
      about[k] = data[k];
    }

    return about.save();
  }

  async find() {
    const item = await this.aboutModel.findOne();
    if (!item) {
      return (new this.aboutModel({})).save();
    }

    return item;
  }
}
