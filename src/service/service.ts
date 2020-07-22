import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/service/types';
import { ServiceInterface } from 'src/service/interface';
import { serviceSchema } from 'src/service/schema';

@Injectable()
export class ServiceService implements CrudInterface {
  constructor(@Inject(types.SERVICE_MODEL) private readonly serviceModel: mongoose.Model<ServiceInterface>) {}

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
}
