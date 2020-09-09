import { Module } from '@nestjs/common';
import { BlogController, BlogHeaderController } from 'src/blog/controller';
import { blogProvider } from 'src/blog/provider';
import { BlogService } from 'src/blog/service';
import { S3Service } from 'src/core/aws/service';

@Module({
  controllers: [BlogController, BlogHeaderController],
  providers: [
    BlogService,
    ...blogProvider,
    S3Service,
  ],
})

export class BlogModule {}
