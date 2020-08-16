import { Global, Module } from '@nestjs/common';
import { AdminService } from 'src/admin/service';
import { adminProvider } from 'src/admin/provider';

@Global()
@Module({
  providers: [
    AdminService,
    ...adminProvider,
  ],
  exports: [
    AdminService,
    ...adminProvider,
  ],
})

export class AdminModule {}
