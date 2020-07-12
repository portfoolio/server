import { Global, Module } from '@nestjs/common';
import { ConfigService } from './service';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService('.env'),
    },
  ],
  exports: [ConfigService],
})

export class ConfigModule {}
