import { Module } from '@nestjs/common';
import { TechnologyController, TechnologyHeaderController } from 'src/technologie/controller';
import { technologieProvider } from 'src/technologie/provider';
import { TechnologyService } from 'src/technologie/service';

@Module({
  controllers: [TechnologyController, TechnologyHeaderController],
  providers: [
    TechnologyService,
    ...technologieProvider,
  ],
})

export class TechnologyModule {}
