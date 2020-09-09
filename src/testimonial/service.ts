import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/testimonial/types';
import { TestimonialHeaderInterface, TestimonialInterface } from 'src/testimonial/interface';
import { testimonialHeaderSchema, testimonialSchema } from 'src/testimonial/schema';

@Injectable()
export class TestimonialService implements CrudInterface {
  constructor(
    @Inject(types.TESTIMONIAL_MODEL) private readonly testimonialModel: mongoose.Model<TestimonialInterface>,
    @Inject(types.TESTIMONIAL_HEADER_MODEL) private readonly testimonialHeaderModel: mongoose.Model<TestimonialHeaderInterface>,
  ) {}

  async create(data) {
    return (new this.testimonialModel(data)).save();
  }

  async update(data) {
    let testimonial = await this.testimonialModel.findById(data.id);
    for (let k of Object.keys(testimonialSchema)) {
      testimonial[k] = data[k];
    }

    return testimonial.save();
  }

  async delete(id) {
    return await this.testimonialModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.testimonialModel.findById(id);
  }

  async list() {
    return this.testimonialModel.find({});
  }

  async findHeader() {
    const header = await this.testimonialHeaderModel.findOne();
    if (!header) {
      return (new this.testimonialHeaderModel({})).save();
    }

    return header;
  }

  async updateHeader(data) {
    let header = await this.testimonialHeaderModel.findOne(data.id);
    for (let k of Object.keys(testimonialHeaderSchema)) {
      header[k] = data[k];
    }

    return header.save();
  }
}
