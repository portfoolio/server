import { Module } from '@nestjs/common';
import { JourneyController, JourneyHeaderController, JourneyItemController } from 'src/journey/controller';
import { journeyProvider } from 'src/journey/provider';
import { JourneyService } from 'src/journey/service';

@Module({
  controllers: [
    JourneyController,
    JourneyHeaderController,
    JourneyItemController,
  ],
  providers: [
    JourneyService,
    ...journeyProvider,
  ],
})

export class JourneyModule {}
