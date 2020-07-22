import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/contact/types';
import { ContactInterface } from 'src/contact/interface';
import { contactSchema } from 'src/contact/schema';

@Injectable()
export class ContactService implements CrudInterface {
  constructor(@Inject(types.CONTACT_MODEL) private readonly contactModel: mongoose.Model<ContactInterface>) {}

  async create(data) {
    return (new this.contactModel(data)).save();
  }

  async update(data) {
    let contact = await this.contactModel.findById(data.id);
    for (let k in Object.keys(contactSchema)) {
      contact[k] = data[k];
    }

    return contact.save();
  }

  async delete(id) {
    return await this.contactModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.contactModel.findById(id);
  }

  async list() {
    return this.contactModel.find({});
  }
}
