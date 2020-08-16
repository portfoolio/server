import { Module, Global } from '@nestjs/common';
import { mongoConnectionProvider } from 'src/core/database/mongoose';
import { types } from 'src/core/types';

@Global()
@Module({
  providers: [
    ...mongoConnectionProvider,
  ],
  exports: [
    ...mongoConnectionProvider,
    types.CONNECTION,
  ],
})

export class DatabaseModule {}
