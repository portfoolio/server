import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { types } from 'src/header/types';
import { HeaderInterface } from 'src/header/interface';
import { headerSchema } from 'src/header/schema';
import { FILE, S3Service } from 'src/core/aws/service';

@Injectable()
export class HeaderService {
  constructor(
    @Inject(types.HEADER_MODEL) private readonly headerModel: mongoose.Model<HeaderInterface>,
    private readonly s3Service: S3Service,
  ) {}

  async create(data) {
    return (new this.headerModel(data)).save();
  }

  async update(data, image: FILE) {
    let header = await this.headerModel.findOne();
    if (!header) {
      header = await this.create(data);
    }

    for (let k of Object.keys(headerSchema)) {
      header[k] = data[k];
    }

    if (image) {
      header.image = await this.s3Service.upload(image);
    }

    return header.save();
  }

  async find() {
    const header = await this.headerModel.findOne();
    if (!header) {
      return await this.create({})
    }

    return header;
  }
}
