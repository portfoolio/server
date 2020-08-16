import { Module } from '@nestjs/common';
import { ServiceController } from 'src/service/controller';
import { ServiceService } from 'src/service/service';
import { serviceProvider } from 'src/service/provider';
import { mongoConnectionProvider } from 'src/core/database/mongoose';

@Module({
  controllers: [ServiceController],
  providers: [
    ServiceService,
    ...serviceProvider,
    ...mongoConnectionProvider
  ],
})

export class ServiceModule {}
