import { Module } from '@nestjs/common';
import { ClientController } from 'src/client/controller';
import { ClientService } from 'src/client/service';
import { aboutProvider } from 'src/about/provider';

@Module({
  controllers: [ClientController],
  providers: [
    ClientService,
    ...aboutProvider,
  ],
})

export class ClientModule {}
