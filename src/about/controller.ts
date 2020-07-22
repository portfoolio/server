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
import { AboutInterface } from 'src/about/interface';
import { AboutDTO } from 'src/about/dto';
import { AboutService } from 'src/about/service';

@ApiBearerAuth()
@ApiTags('about')
@Controller('about')
export class AboutController {
  constructor(private readonly service: AboutService) {}

  @Post()
  @UseGuards(AuthGuard('admin'))
  async create(@Body() aboutDTO: AboutDTO): Promise<AboutDTO> {
    return await this.service.create(aboutDTO);
  }

  @Get(':id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<AboutInterface> {
    return await this.service.find(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() aboutDTO: AboutDTO): Promise<AboutDTO> {
    return await this.service.update(aboutDTO);
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
