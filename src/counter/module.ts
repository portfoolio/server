import { Module } from '@nestjs/common';
import { CounterController } from 'src/counter/controller';
import { CounterService } from 'src/counter/service';
import { counterProvider } from 'src/counter/provider';

@Module({
  controllers: [CounterController],
  providers: [
    CounterService,
    ...counterProvider,
  ],
})

export class CounterModule {}
