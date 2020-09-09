import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { TestimonialInterface } from 'src/testimonial/interface';
import { TestimonialDTO, TestimonialHeaderDTO } from 'src/testimonial/dto';
import { TestimonialService } from 'src/testimonial/service';

@ApiBearerAuth()
@ApiTags('testimonial')
@Controller('testimonial')
export class TestimonialController {
  constructor(private readonly service: TestimonialService) {}

  @Post()
  @UseGuards(AuthGuard('admin'))
  async create(@Body() testimonialDTO: TestimonialDTO): Promise<TestimonialDTO> {
    return await this.service.create(testimonialDTO);
  }

  @Get(':id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<TestimonialInterface> {
    return await this.service.find(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() testimonialDTO: TestimonialDTO): Promise<TestimonialDTO> {
    return await this.service.update(testimonialDTO);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('admin'))
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.service.delete(id);
  }

  @Get()
  @UseGuards(AuthGuard('admin'))
  async list() {
    return await this.service.list();
  }
}

@ApiBearerAuth()
@ApiTags('testimonial')
@Controller('testimonial-header')
export class TestimonialHeaderController {
  constructor(private readonly service: TestimonialService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  async find(): Promise<TestimonialInterface> {
    return await this.service.findHeader();
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() testimonialHeaderDTO: TestimonialHeaderDTO): Promise<TestimonialHeaderDTO> {
    return await this.service.updateHeader(testimonialHeaderDTO);
  }
}
