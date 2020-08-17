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
import { CounterService } from 'src/counter/service';
import { CounterDTO } from 'src/counter/dto';
import { CounterInterface } from 'src/counter/interface';

@ApiBearerAuth()
@ApiTags('counter')
@Controller('counter')
export class CounterController {
  constructor(private readonly service: CounterService) {}

  @Post()
  @UseGuards(AuthGuard('admin'))
  async create(@Body() counterDTO: CounterDTO): Promise<CounterDTO> {
    return await this.service.create(counterDTO);
  }

  @Get(':id')
  @UseGuards(AuthGuard('admin'))
  async find(@Param('id') id: string): Promise<CounterInterface> {
    return await this.service.find(id);
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() counterDTO: CounterDTO): Promise<CounterDTO> {
    return await this.service.update(counterDTO);
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
