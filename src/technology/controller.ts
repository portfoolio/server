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

import { TechnologyInterface } from 'src/technology/interface';
import { TechnologyDTO, TechnologyHeaderDTO } from 'src/technology/dto';
import { TechnologyService } from 'src/technology/service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiBearerAuth()
@ApiTags('technology')
@Controller('technology')
export class TechnologyController {
  constructor(private readonly service: TechnologyService) {}

  @Post()
  @UseGuards(AuthGuard('admin'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() technologyDTO: TechnologyDTO, @UploadedFile() image): Promise<TechnologyDTO> {
    return await this.service.create(technologyDTO, image);
  }

  @Get(':id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<TechnologyInterface> {
    return await this.service.find(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  async update(@Body() technologyDTO: TechnologyDTO, @UploadedFile() image): Promise<TechnologyDTO> {
    return await this.service.update(technologyDTO, image);
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
@ApiTags('technology')
@Controller('technology-header')
export class TechnologyHeaderController {
  constructor(private readonly service: TechnologyService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  async find(): Promise<TechnologyInterface> {
    return await this.service.findHeader();
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() technologyHeaderDTO: TechnologyHeaderDTO): Promise<TechnologyHeaderDTO> {
    return await this.service.updateHeader(technologyHeaderDTO);
  }
}
