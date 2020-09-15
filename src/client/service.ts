import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { types } from 'src/about/types';
import { AboutInterface } from 'src/about/interface';

@Injectable()
export class ClientService {
  private headerModel = null;
  private counterModel = null;
  private serviceModel = null;
  private journeyModel = null;
  private projectModel = null;
  private testimonialModel = null;
  private technologyModel = null;
  private blogModel = null;
  private settingModel = null;

  /**
   * Client/Site service facade for fetching all stuff from db.
   *
   * @param aboutModel | About Model
   */
  constructor(@Inject(types.ABOUT_MODEL) protected readonly aboutModel: mongoose.Model<AboutInterface>) {
    this.headerModel = aboutModel.model('Header');
    this.counterModel = aboutModel.model('Counter');
    this.serviceModel = aboutModel.model('Service');
    this.journeyModel = aboutModel.model('Journey');
    this.projectModel = aboutModel.model('Project');
    this.testimonialModel = aboutModel.model('Testimonial');
    this.technologyModel = aboutModel.model('Technology');
    this.blogModel = aboutModel.model('Blog');
    this.settingModel = aboutModel.model('Setting');
  }

  async fetchAbout() {
    const header = await this.headerModel.findOne({});
    const about = await this.aboutModel.findOne({});
    const counter = await this.counterModel.find({});

    return {
      header,
      about,
      counter,
    };
  }

  async fetchService() {
    const header = await this.serviceModel.model('ServiceHeader').findOne({});
    const services = await this.serviceModel.find();

    return {
      header,
      services,
    };
  }

  async fetchJourney() {
    const header = await this.journeyModel.model('JourneyHeader').findOne({});
    const items = await this.journeyModel.find().populate({
      path: 'items', options: { sort: { 'createdAt': -1 } }
    });

    return {
      header,
      items,
    };
  }

  async fetchProject() {
    const header = await this.projectModel.model('ProjectHeader').findOne({});
    const items = await this.projectModel.find();

    return {
      header,
      items,
    };
  }

  async fetchTestimonial() {
    const header = await this.testimonialModel.model('TestimonialHeader').findOne({});
    const items = await this.testimonialModel.find();

    return {
      header,
      items,
    };
  }

  async fetchBlog() {
    const header = await this.blogModel.model('BlogHeader').findOne({});
    const posts = await this.blogModel.find();

    return {
      header,
      posts,
    };
  }
}
