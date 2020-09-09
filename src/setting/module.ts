import { Module } from '@nestjs/common';
import { SettingController } from 'src/setting/controller';
import { SettingService } from 'src/setting/service';
import { settingProvider } from 'src/setting/provider';

@Module({
  controllers: [SettingController],
  providers: [
    SettingService,
    ...settingProvider,
  ],
})

export class SettingModule {}
