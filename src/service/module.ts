import { Module } from '@nestjs/common';
import { ServiceController, ServiceHeaderController } from 'src/service/controller';
import { ServiceService } from 'src/service/service';
import { serviceProvider } from 'src/service/provider';

@Module({
  controllers: [ServiceController, ServiceHeaderController],
  providers: [
    ServiceService,
    ...serviceProvider,
  ],
})

export class ServiceModule {}
