import {
  Controller,
  Body,
  Get,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SettingInterface } from 'src/setting/interface';
import { SettingDTO } from 'src/setting/dto';
import { SettingService } from 'src/setting/service';

@ApiBearerAuth()
@ApiTags('setting')
@Controller('setting')
export class SettingController {
  constructor(private readonly service: SettingService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  async find(): Promise<SettingInterface> {
    return await this.service.find();
  }

  @Put()
  @UseGuards(AuthGuard('admin'))
  async update(@Body() settingDTO: SettingDTO): Promise<SettingDTO> {
    return await this.service.update(settingDTO);
  }
}
