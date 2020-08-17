import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/counter/types';
import { counterSchema } from 'src/counter/schema';
import { CounterInterface } from 'src/counter/interface';

@Injectable()
export class CounterService implements CrudInterface {
  constructor(@Inject(types.COUNTER_MODEL) private readonly counterModel: mongoose.Model<CounterInterface>) {}

  async create(data) {
    return (new this.counterModel(data)).save();
  }

  async update(data) {
    let about = await this.counterModel.findById(data.id);
    for (let k of Object.keys(counterSchema)) {
      about[k] = data[k];
    }

    return about.save();
  }

  async delete(id) {
    return await this.counterModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.counterModel.findById(id);
  }

  async list() {
    return this.counterModel.find({});
  }
}
