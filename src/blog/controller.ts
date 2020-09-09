import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards, UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';

import { BlogInterface } from 'src/blog/interface';
import { BlogDTO, BlogHeaderDTO } from 'src/blog/dto';
import { BlogService } from 'src/blog/service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiBearerAuth()
@ApiTags('blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly service: BlogService) {}

  @Post()
  @UseGuards(AuthGuard('admin'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 },
  ]))
  async create(@Body() blogDTO: BlogDTO, @UploadedFiles() files): Promise<BlogDTO> {
    return await this.service.create(blogDTO, files.image[0], files.thumbnail[0]);
  }

  @Get(':id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<BlogInterface> {
    return await this.service.find(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 },
  ]))
  async update(@Body() blogDTO: BlogDTO, @UploadedFiles() files): Promise<BlogDTO> {
    return await this.service.update(blogDTO, files);
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
@ApiTags('blog')
@Controller('blog-header')
export class BlogHeaderController {
  constructor(private readonly service: BlogService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  async find(): Promise<BlogInterface> {
    return await this.service.findHeader();
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() blogHeaderDTO: BlogHeaderDTO): Promise<BlogHeaderDTO> {
    return await this.service.updateHeader(blogHeaderDTO);
  }
}
