import * as mongoose from 'mongoose';
import { types } from './types';
import { types as coreTypes } from 'src/core/types';
import { ProjectHeaderSchema, ProjectSchema } from 'src/project/schema';

export const projectProvider = [
  {
    provide: types.PROJECT_MODEL,
    useFactory: () => mongoose.model('Project', ProjectSchema, 'project'),
    inject: [coreTypes.CONNECTION],
  },
  {
    provide: types.PROJECT_HEADER_MODEL,
    useFactory: () => mongoose.model('ProjectHeader', ProjectHeaderSchema, 'projectHeader'),
    inject: [coreTypes.CONNECTION],
  },
];
