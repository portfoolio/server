import { Module, Global } from '@nestjs/common';
import { MulterModule as ExpressMulterModule, MulterModuleOptions } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as crypto from 'crypto';
import * as path from 'path';

@Global()
@Module({
  imports: [
    ExpressMulterModule.registerAsync({
      useFactory: (): MulterModuleOptions => {
        return {
          storage: multer.diskStorage({
            destination: './upload/',
            filename:  (req, file, cb) => {
              crypto.pseudoRandomBytes(16, (err, raw) => {
                if (err) {
                  return cb(err, null);
                }

                cb(null, raw.toString('hex') + path.extname(file.originalname));
              });
            },
          }),
        };
      },
    }),
  ],
  exports: [ExpressMulterModule],
})

export class MulterModule {}
