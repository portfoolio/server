import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/blog/types';
import { BlogHeaderInterface, BlogInterface } from 'src/blog/interface';
import { blogHeaderSchema, blogSchema } from 'src/blog/schema';
import { FILE, S3Service } from 'src/core/aws/service';

@Injectable()
export class BlogService implements CrudInterface {
  constructor(
    private readonly s3Service: S3Service,
    @Inject(types.BLOG_MODEL) private readonly blogModel: mongoose.Model<BlogInterface>,
    @Inject(types.BLOG_HEADER_MODEL) private readonly blogHeaderModel: mongoose.Model<BlogHeaderInterface>,
  ) {}

  async create(data, image: FILE, thumbnail: FILE) {
    if (image) {
      data.image = await this.s3Service.upload(image);
    }

    if (thumbnail) {
      data.thumbnail = await this.s3Service.upload(thumbnail);
    }

    return (new this.blogModel(data)).save();
  }

  async update(data, files) {
    let blog = await this.blogModel.findById(data.id);
    for (let k of Object.keys(blogSchema)) {
      blog[k] = data[k];
    }

    let image = null;
    let thumbnail = null;
    if (files && files.hasOwnProperty('image') && files.image) {
      image = files.image[0];
    }

    if (files && files.hasOwnProperty('thumbnail') && files.thumbnail) {
      thumbnail = files.thumbnail[0];
    }

    if (image) {
      blog.image = await this.s3Service.upload(image);
    }

    if (thumbnail) {
      blog.thumbnail = await this.s3Service.upload(thumbnail);
    }

    return blog.save();
  }

  async delete(id) {
    return await this.blogModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.blogModel.findById(id);
  }

  async list() {
    return this.blogModel.find({});
  }

  async findHeader() {
    const header = await this.blogHeaderModel.findOne();
    if (!header) {
      return (new this.blogHeaderModel({})).save();
    }

    return header;
  }

  async updateHeader(data) {
    let header = await this.blogHeaderModel.findOne(data.id);
    for (let k of Object.keys(blogHeaderSchema)) {
      header[k] = data[k];
    }

    return header.save();
  }
}
