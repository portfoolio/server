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
import { ServiceInterface } from 'src/service/interface';
import { ServiceDTO, ServiceHeaderDTO } from 'src/service/dto';
import { ServiceService } from 'src/service/service';

@ApiBearerAuth()
@ApiTags('service')
@Controller('service')
export class ServiceController {
  constructor(private readonly service: ServiceService) {}

  @Post()
  @UseGuards(AuthGuard('admin'))
  async create(@Body() serviceDTO: ServiceDTO): Promise<ServiceDTO> {
    return await this.service.create(serviceDTO);
  }

  @Get(':id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<ServiceInterface> {
    return await this.service.find(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() serviceDTO: ServiceDTO): Promise<ServiceDTO> {
    return await this.service.update(serviceDTO);
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
@ApiTags('service')
@Controller('service-header')
export class ServiceHeaderController {
  constructor(private readonly service: ServiceService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  async find(): Promise<ServiceInterface> {
    return await this.service.findHeader();
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() serviceHeaderDTO: ServiceHeaderDTO): Promise<ServiceHeaderDTO> {
    return await this.service.updateHeader(serviceHeaderDTO);
  }
}
