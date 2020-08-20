import {
  Controller,
  Body,
  Get,
  Put,
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

  @Get()
  @UseGuards(AuthGuard('admin'))
  async find(): Promise<AboutInterface> {
    return await this.service.find();
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() aboutDTO: AboutDTO): Promise<AboutDTO> {
    return await this.service.update(aboutDTO);
  }
}
