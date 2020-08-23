import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/journey/types';
import { JourneyHeaderInterface, JourneyInterface, JourneyItemInterface } from 'src/journey/interface';
import { journeyHeaderSchema, journeyItemsSchema, journeySchema } from 'src/journey/schema';

@Injectable()
export class JourneyService implements CrudInterface {
  constructor(
    @Inject(types.JOURNEY_MODEL) private readonly journeyModel: mongoose.Model<JourneyInterface>,
    @Inject(types.JOURNEY_HEADER_MODEL) private readonly journeyHeaderModel: mongoose.Model<JourneyHeaderInterface>,
    @Inject(types.JOURNEY_ITEM_MODEL) private readonly journeyItemModel: mongoose.Model<JourneyItemInterface>
  ) {}

  async create(data) {
    return (new this.journeyModel(data)).save();
  }

  async update(data) {
    let journey = await this.journeyModel.findById(data.id);
    for (let k of Object.keys(journeySchema)) {
      journey[k] = data[k];
    }

    return journey.save();
  }

  async delete(id) {
    return await this.journeyModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.journeyModel.findById(id);
  }

  async list() {
    return this.journeyModel.find({});
  }

  async findHeader() {
    const header = await this.journeyHeaderModel.findOne();
    if (!header) {
      return (new this.journeyHeaderModel({})).save();
    }

    return header;
  }

  async updateHeader(data) {
    let header = await this.journeyHeaderModel.findOne(data.id);
    for (let k of Object.keys(journeyHeaderSchema)) {
      header[k] = data[k];
    }

    return header.save();
  }

  async createItem(id, data) {
    const item = await (new this.journeyItemModel(data)).save();
    const journey = await this.journeyModel.findById(id);
    journey.items.push(item);

    await journey.save();

    return item;
  }

  async findItem(id: string) {
    return await this.journeyItemModel.findById(id);
  }

  async updateItem(data) {
    let journeyItem = await this.journeyItemModel.findById(data.id);
    for (let k of Object.keys(journeyItemsSchema)) {
      journeyItem[k] = data[k];
    }

    return journeyItem.save();
  }

  async deleteItem(journeyId: string, itemId: string,) {
    await this.journeyModel.update({ _id: journeyId }, { $pull: { items: itemId } } );
    return await this.journeyItemModel.findByIdAndRemove(itemId);
  }

  async listItem(journeyId: string) {
    const journey = await this.journeyModel.findById(journeyId).populate('items');
    return journey.items;
  }
}
