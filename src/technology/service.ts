import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/technology/types';
import { TechnologyHeaderInterface, TechnologyInterface } from 'src/technology/interface';
import { technologyHeaderSchema, technologySchema } from 'src/technology/schema';
import { FILE, S3Service } from 'src/core/aws/service';

@Injectable()
export class TechnologyService implements CrudInterface {
  constructor(
    private readonly s3Service: S3Service,
    @Inject(types.TECHNOLOGY_MODEL) private readonly technologyModel: mongoose.Model<TechnologyInterface>,
    @Inject(types.TECHNOLOGY_HEADER_MODEL) private readonly technologyHeaderModel: mongoose.Model<TechnologyHeaderInterface>,
  ) {}

  async create(data, image: FILE) {
    if (image) {
      data.image = await this.s3Service.upload(image);
    }

    return (new this.technologyModel(data)).save();
  }

  async update(data, image: FILE) {
    let technology = await this.technologyModel.findById(data.id);
    for (let k of Object.keys(technologySchema)) {
      technology[k] = data[k];
    }

    if (image) {
      technology.image = await this.s3Service.upload(image);
    }

    return technology.save();
  }

  async delete(id) {
    return await this.technologyModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.technologyModel.findById(id);
  }

  async list() {
    return this.technologyModel.find({});
  }

  async findHeader() {
    const header = await this.technologyHeaderModel.findOne();
    if (!header) {
      return (new this.technologyHeaderModel({})).save();
    }

    return header;
  }

  async updateHeader(data) {
    let header = await this.technologyHeaderModel.findOne(data.id);
    for (let k of Object.keys(technologyHeaderSchema)) {
      header[k] = data[k];
    }

    return header.save();
  }
}
