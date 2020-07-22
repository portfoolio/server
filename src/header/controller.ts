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
import { HeaderInterface } from 'src/header/interface';
import { HeaderDTO } from 'src/header/dto';
import { HeaderService } from 'src/header/service';

@ApiBearerAuth()
@ApiTags('header')
@Controller('header')
export class HeaderController {
  constructor(private readonly service: HeaderService) {}

  @Post()
  @UseGuards(AuthGuard('admin'))
  async create(@Body() headerDTO: HeaderDTO): Promise<HeaderDTO> {
    return await this.service.create(headerDTO);
  }

  @Get(':id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<HeaderInterface> {
    return await this.service.find(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() headerDTO: HeaderDTO): Promise<HeaderDTO> {
    return await this.service.update(headerDTO);
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
