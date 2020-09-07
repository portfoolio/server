import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CrudInterface } from 'src/core/crud.interface';
import { types } from 'src/project/types';
import { ProjectHeaderInterface, ProjectInterface } from 'src/project/interface';
import { projectHeaderSchema, projectSchema } from 'src/project/schema';
import { FILE, S3Service } from 'src/core/aws/service';

@Injectable()
export class ProjectService implements CrudInterface {
  constructor(
    private readonly s3Service: S3Service,
    @Inject(types.PROJECT_MODEL) private readonly projectModel: mongoose.Model<ProjectInterface>,
    @Inject(types.PROJECT_HEADER_MODEL) private readonly projectHeaderModel: mongoose.Model<ProjectHeaderInterface>,
  ) {}

  async create(data, image: FILE) {
    if (image) {
      data.image = await this.s3Service.upload(image);
    }

    return (new this.projectModel(data)).save();
  }

  async update(data, image: FILE) {
    let project = await this.projectModel.findById(data.id);
    for (let k of Object.keys(projectSchema)) {
      project[k] = data[k];
    }

    if (image) {
      project.image = await this.s3Service.upload(image);
    }

    return project.save();
  }

  async delete(id) {
    return await this.projectModel.findByIdAndRemove(id);
  }

  async find(id) {
    return this.projectModel.findById(id);
  }

  async list() {
    return this.projectModel.find({});
  }

  async findHeader() {
    const header = await this.projectHeaderModel.findOne();
    if (!header) {
      return (new this.projectHeaderModel({})).save();
    }

    return header;
  }

  async updateHeader(data) {
    let header = await this.projectHeaderModel.findOne(data.id);
    for (let k of Object.keys(projectHeaderSchema)) {
      header[k] = data[k];
    }

    return header.save();
  }
}
