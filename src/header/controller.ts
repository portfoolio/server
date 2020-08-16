import {
  Controller,
  Body,
  Get,
  Put,
  UseGuards, UseInterceptors, UploadedFile,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { HeaderInterface } from 'src/header/interface';
import { HeaderDTO } from 'src/header/dto';
import { HeaderService } from 'src/header/service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiBearerAuth()
@ApiTags('header')
@Controller('header')
export class HeaderController {
  constructor(private readonly service: HeaderService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  async find(): Promise<HeaderInterface> {
    return await this.service.find();
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  async update(@Body() headerDTO: HeaderDTO, @UploadedFile() image): Promise<HeaderDTO> {
    return await this.service.update(headerDTO, image);
  }
}
