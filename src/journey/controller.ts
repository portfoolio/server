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
import { JourneyService } from 'src/journey/service';
import { JourneyDTO, JourneyHeaderDTO, JourneyItemDTO } from 'src/journey/dto';
import { JourneyInterface, JourneyItemInterface } from 'src/journey/interface';

@ApiBearerAuth()
@ApiTags('journey')
@Controller('journey')
export class JourneyController {
  constructor(private readonly service: JourneyService) {}

  @Post()
  @UseGuards(AuthGuard('admin'))
  async create(@Body() journeyDTO: JourneyDTO): Promise<JourneyDTO> {
    return await this.service.create(journeyDTO);
  }

  @Get(':id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<JourneyInterface> {
    return await this.service.find(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() journeyDTO: JourneyDTO): Promise<JourneyDTO> {
    return await this.service.update(journeyDTO);
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
@ApiTags('journey')
@Controller('journey-header')
export class JourneyHeaderController {
  constructor(private readonly service: JourneyService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  async find(): Promise<JourneyInterface> {
    return await this.service.findHeader();
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() journeyHeaderDTO: JourneyHeaderDTO): Promise<JourneyHeaderDTO> {
    return await this.service.updateHeader(journeyHeaderDTO);
  }
}

@ApiBearerAuth()
@ApiTags('journey')
@Controller('journey-item')
export class JourneyItemController {
  constructor(private readonly service: JourneyService) {}

  @Post('create-item/:id')
  @UseGuards(AuthGuard('admin'))
  async create(@Param('id') id: string, @Body() journeyItemDTO: JourneyItemDTO): Promise<JourneyItemDTO> {
    return await this.service.createItem(id, journeyItemDTO);
  }

  @Get('find-item/:id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<JourneyItemInterface> {
    return await this.service.findItem(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() journeyItemDTO: JourneyItemDTO): Promise<JourneyItemDTO> {
    return await this.service.updateItem(journeyItemDTO);
  }

  @Delete('delete/:journeyId/:id')
  @UseGuards(AuthGuard('admin'))
  async delete(@Param('journeyId') journeyId: string, @Param('id') id: string): Promise<boolean> {
    return await this.service.deleteItem(journeyId, id);
  }

  @Get('list-items/:journeyId')
  @UseGuards(AuthGuard('admin'))
  async list(@Param('journeyId') journeyId: string) {
    return await this.service.listItem(journeyId);
  }
}
