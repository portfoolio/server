import { Module } from '@nestjs/common';
import { ContactController } from 'src/contact/controller';
import { contactProvider } from 'src/contact/provider';
import { ContactService } from 'src/contact/service';

@Module({
  controllers: [ContactController],
  providers: [
    ContactService,
    ...contactProvider,
  ],
})

export class ContactModule {}
