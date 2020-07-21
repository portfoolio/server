import { Module } from '@nestjs/common';
import { HeaderController } from 'src/header/controller';
import { HeaderService } from 'src/header/service';
import { headerProvider } from 'src/header/provider';
import { mongoConnectionProvider } from 'src/core/mongoose';

@Module({
  controllers: [HeaderController],
  providers: [
    HeaderService,
    ...headerProvider,
    ...mongoConnectionProvider
  ],
})

export class HeaderModule {}
