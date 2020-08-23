import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards, UseInterceptors, UploadedFile,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

import { ProjectInterface } from 'src/project/interface';
import { ProjectDTO, ProjectHeaderDTO } from 'src/project/dto';
import { ProjectService } from 'src/project/service';

@ApiBearerAuth()
@ApiTags('project')
@Controller('project')
export class ProjectController {
  constructor(private readonly service: ProjectService) {}

  @Post()
  @UseGuards(AuthGuard('admin'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() projectDTO: ProjectDTO, @UploadedFile() image): Promise<ProjectDTO> {
    return await this.service.create(projectDTO, image);
  }

  @Get(':id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<ProjectInterface> {
    return await this.service.find(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  async update(@Body() projectDTO: ProjectDTO, @UploadedFile() image): Promise<ProjectDTO> {
    return await this.service.update(projectDTO, image);
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
@ApiTags('project')
@Controller('project-header')
export class ProjectHeaderController {
  constructor(private readonly service: ProjectService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  async find(): Promise<ProjectInterface> {
    return await this.service.findHeader();
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() projectHeaderDTO: ProjectHeaderDTO): Promise<ProjectHeaderDTO> {
    return await this.service.updateHeader(projectHeaderDTO);
  }
}
