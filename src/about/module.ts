import { Module } from '@nestjs/common';
import { AboutController } from 'src/about/controller';
import { AboutService } from 'src/about/service';
import { aboutProvider } from 'src/about/provider';

@Module({
  controllers: [AboutController],
  providers: [
    AboutService,
    ...aboutProvider,
  ],
})

export class AboutModule {}
