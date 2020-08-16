import { Module } from '@nestjs/common';
import { S3Service } from 'src/core/aws/service';

@Module({
  providers: [S3Service],
  exports: [S3Service],
})

export class AWSModule {}
