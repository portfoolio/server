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

import { TechnologyInterface } from 'src/technologie/interface';
import { TechnologyDTO, TechnologyHeaderDTO } from 'src/technologie/dto';
import { TechnologyService } from 'src/technologie/service';

@ApiBearerAuth()
@ApiTags('technologie')
@Controller('technologie')
export class TechnologyController {
  constructor(private readonly service: TechnologyService) {}

  @Post()
  @UseGuards(AuthGuard('admin'))
  async create(@Body() technologieDTO: TechnologyDTO): Promise<TechnologyDTO> {
    return await this.service.create(technologieDTO);
  }

  @Get(':id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<TechnologyInterface> {
    return await this.service.find(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() technologieDTO: TechnologyDTO): Promise<TechnologyDTO> {
    return await this.service.update(technologieDTO);
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
@ApiTags('technologie')
@Controller('technologie-header')
export class TechnologyHeaderController {
  constructor(private readonly service: TechnologyService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  async find(): Promise<TechnologyInterface> {
    return await this.service.findHeader();
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() technologieHeaderDTO: TechnologyHeaderDTO): Promise<TechnologyHeaderDTO> {
    return await this.service.updateHeader(technologieHeaderDTO);
  }
}
