import { Module } from '@nestjs/common';
import { HeaderController } from 'src/header/controller';
import { HeaderService } from 'src/header/service';
import { S3Service } from 'src/core/aws/service';
import { headerProvider } from 'src/header/provider';

@Module({
  controllers: [HeaderController],
  providers: [
    HeaderService,
    S3Service,
    ...headerProvider,
  ],
})

export class HeaderModule {}
