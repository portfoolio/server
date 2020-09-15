import {
  Controller,
  Get,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientService } from 'src/client/service';

@ApiBearerAuth()
@ApiTags('client')
@Controller('client')
export class ClientController {
  constructor(private readonly service: ClientService) {}

  @Get('fetch-about')
  async fetchAbout(): Promise<any> {
    return await this.service.fetchAbout();
  }

  @Get('fetch-service')
  async fetchService(): Promise<any> {
    return await this.service.fetchService();
  }

  @Get('fetch-journey')
  async fetchJourney(): Promise<any> {
    return await this.service.fetchJourney();
  }

  @Get('fetch-project')
  async fetchProject(): Promise<any> {
    return await this.service.fetchProject();
  }

  @Get('fetch-testimonial')
  async fetchTestimonial(): Promise<any> {
    return await this.service.fetchTestimonial();
  }

  @Get('fetch-blog')
  async fetchBlog(): Promise<any> {
    return await this.service.fetchBlog();
  }
}
