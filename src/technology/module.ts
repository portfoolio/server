import { Module } from '@nestjs/common';
import { TechnologyController, TechnologyHeaderController } from 'src/technology/controller';
import { technologyProvider } from 'src/technology/provider';
import { TechnologyService } from 'src/technology/service';
import { S3Service } from 'src/core/aws/service';

@Module({
  controllers: [TechnologyController, TechnologyHeaderController],
  providers: [
    TechnologyService,
    ...technologyProvider,
    S3Service,
  ],
})

export class TechnologyModule {}
