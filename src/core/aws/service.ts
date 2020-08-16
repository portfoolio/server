import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { S3 } from 'aws-sdk';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { ConfigService } from '../config/service';

export interface FILE {
  readonly path: string;
  readonly fieldname: string;
  readonly originalname: string;
  readonly filename: string;
}

export interface IS3ServiceUpload {
  upload: (file: FILE) => Promise<string|Error>;
  uploadMany: (files: FILE[]) => Promise<string[]>;
}

@Injectable()
export class S3Service implements IS3ServiceUpload {
  s3: AWS.S3 = new AWS.S3();

  constructor(private readonly config: ConfigService) {
    AWS.config.update({
      accessKeyId: config.get('AWS_S3_ACCESS_KEY'),
      secretAccessKey: config.get('AWS_S3_SECRET_KEY'),
    });
  }

  async upload(file: FILE): Promise<string> {
    const awsPath = this.config.get('AWS_S3_UPLOAD_PATH');
    const cryptoFragment = crypto.createHash('md5').update(file.filename).digest('hex');
    const extension = path.extname(file.originalname);
    const Key = `${awsPath}${cryptoFragment}${extension}`;
    const params = {
      Bucket: this.config.get('AWS_S3_BUCKET_NAME'),
      Body: fs.createReadStream(`./${file.path}`),
      Key,
    };

    const s3 = this.s3;
    const s3Upload = (parameters: S3.Types.PutObjectRequest): Promise<any> =>
      new Promise((resolve, reject) => {
        return s3.upload(parameters, (err, data) => {
          if (err) {
            reject(err);
          }

          if (data) {
            resolve(data);
          }
        });
      })
    ;

    try {
      const { Location } = await s3Upload(params);
      return Location;
    } catch (e) {
      const err = 'There was an error while uploading file to S3. E:';
      throw new Error(`${err} ${e.message}`);
    }
  }

  async uploadMany(files: FILE[]): Promise<string[]> {
    const filesArray = [];
    for (const k in files) {
      if (!files.hasOwnProperty(k)) {
        continue;
      }

      filesArray.push(await this.upload(files[k]));
    }

    return filesArray;
  }
}
