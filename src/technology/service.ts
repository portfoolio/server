import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/technologie/types';
import { TechnologyHeaderInterface, TechnologyInterface } from 'src/technologie/interface';
import { technologieHeaderSchema, technologieSchema } from 'src/technologie/schema';

@Injectable()
export class TechnologyService implements CrudInterface {
  constructor(
    @Inject(types.TECHNOLOGY_MODEL) private readonly technologieModel: mongoose.Model<TechnologyInterface>,
    @Inject(types.TECHNOLOGY_HEADER_MODEL) private readonly technologieHeaderModel: mongoose.Model<TechnologyHeaderInterface>,
  ) {}

  async create(data) {
    return (new this.technologieModel(data)).save();
  }

  async update(data) {
    let technologie = await this.technologieModel.findById(data.id);
    for (let k of Object.keys(technologieSchema)) {
      technologie[k] = data[k];
    }

    return technologie.save();
  }

  async delete(id) {
    return await this.technologieModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.technologieModel.findById(id);
  }

  async list() {
    return this.technologieModel.find({});
  }

  async findHeader() {
    const header = await this.technologieHeaderModel.findOne();
    if (!header) {
      return (new this.technologieHeaderModel({})).save();
    }

    return header;
  }

  async updateHeader(data) {
    let header = await this.technologieHeaderModel.findOne(data.id);
    for (let k of Object.keys(technologieHeaderSchema)) {
      header[k] = data[k];
    }

    return header.save();
  }
}
