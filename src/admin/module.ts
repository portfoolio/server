import { Global, Module } from '@nestjs/common';
import { types } from './types';
import { AdminService } from 'src/admin/service';
import { mongoConnectionProvider } from 'src/core/mongoose';
import { adminProvider } from 'src/admin/provider';

@Global()
@Module({
  providers: [
    AdminService,
    ...mongoConnectionProvider,
    ...adminProvider,
  ],
  exports: [
    AdminService,
    ...mongoConnectionProvider,
    ...adminProvider,
    types.CONNECTION,
  ],
})

export class AdminModule {}
