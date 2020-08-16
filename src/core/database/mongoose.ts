import * as mongoose from 'mongoose';
import { types } from 'src/core/types';
import { ConfigService } from 'src/core/config/service';

export const mongoConnectionProvider = [
  {
    provide: types.CONNECTION,
    useFactory: async (config: ConfigService) => {
      const connectionName = `mongodb://${config.get('DB_HOST')}/${config.get('DB_NAME')}`;
      return await mongoose.connect(connectionName, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        promiseLibrary: global.Promise,
        useCreateIndex: true,
        useFindAndModify: false,
      });
    },
    inject: [ConfigService],
  },
];
