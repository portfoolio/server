import { Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { types } from 'src/setting/types';
import { SettingInterface } from 'src/setting/interface';
import { settingSchema } from 'src/setting/schema';

@Injectable()
export class SettingService {
  constructor(@Inject(types.SETTING_MODEL) private readonly settingModel: mongoose.Model<SettingInterface>) {}

  async update(data) {
    let setting = await this.settingModel.findOne();
    for (let k of Object.keys(settingSchema)) {
      if (typeof data[k] === 'undefined') {
        continue;
      }

      setting[k] = data[k];
    }

    return setting.save();
  }

  async find() {
    const item = await this.settingModel.findOne();
    if (!item) {
      return (new this.settingModel({})).save();
    }

    return item;
  }
}
