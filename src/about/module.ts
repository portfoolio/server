import { Module } from '@nestjs/common';
import { AboutController } from 'src/about/controller';
import { AboutService } from 'src/about/service';
import { aboutProvider } from 'src/about/provider';
import { mongoConnectionProvider } from 'src/core/database/mongoose';

@Module({
  controllers: [AboutController],
  providers: [
    AboutService,
    ...aboutProvider,
    ...mongoConnectionProvider
  ],
})

export class AboutModule {}
