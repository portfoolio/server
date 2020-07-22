import { Module } from '@nestjs/common';
import { ContactController } from 'src/contact/controller';
import { contactProvider } from 'src/contact/provider';
import { mongoConnectionProvider } from 'src/core/mongoose';
import { ContactService } from 'src/contact/service';

@Module({
  controllers: [ContactController],
  providers: [
    ContactService,
    ...contactProvider,
    ...mongoConnectionProvider
  ],
})

export class ContactModule {}
