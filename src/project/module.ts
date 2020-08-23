import { Module } from '@nestjs/common';
import { ProjectController, ProjectHeaderController } from 'src/project/controller';
import { projectProvider } from 'src/project/provider';
import { ProjectService } from 'src/project/service';
import { S3Service } from 'src/core/aws/service';

@Module({
  controllers: [ProjectController, ProjectHeaderController],
  providers: [
    ProjectService,
    ...projectProvider,
    S3Service,
  ],
})

export class ProjectModule {}
