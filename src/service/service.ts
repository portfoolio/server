import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/service/types';
import { ServiceHeaderInterface, ServiceInterface } from 'src/service/interface';
import { serviceHeaderSchema, serviceSchema } from 'src/service/schema';
import { FILE } from 'src/core/aws/service';
import { headerSchema } from 'src/header/schema';

@Injectable()
export class ServiceService implements CrudInterface {
  constructor(
    @Inject(types.SERVICE_MODEL) private readonly serviceModel: mongoose.Model<ServiceInterface>,
    @Inject(types.SERVICE_HEADER_MODEL) private readonly serviceHeaderModel: mongoose.Model<ServiceHeaderInterface>,
  ) {}

  async create(data) {
    return (new this.serviceModel(data)).save();
  }

  async update(data) {
    let service = await this.serviceModel.findById(data.id);
    for (let k in Object.keys(serviceSchema)) {
      service[k] = data[k];
    }

    return service.save();
  }

  async delete(id) {
    return await this.serviceModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.serviceModel.findById(id);
  }

  async list() {
    return this.serviceModel.find({});
  }

  async findHeader() {
    const header = await this.serviceHeaderModel.findOne();
    if (!header) {
      return (new this.serviceHeaderModel({})).save();
    }

    return header;
  }

  async updateHeader(data) {
    let header = await this.serviceHeaderModel.findOne(data.id);
    for (let k of Object.keys(serviceHeaderSchema)) {
      header[k] = data[k];
    }

    return header.save();
  }
}
