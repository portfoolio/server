import * as mongoose from 'mongoose';
import * as mongooseHidden from 'mongoose-hidden';
import { SchemaDefinition } from 'mongoose';
// tslint:disable-next-line:no-var-requires
const mongooseDelete = require('mongoose-delete');

export default (schema: SchemaDefinition, id: boolean = true, optional: object = {}): mongoose.Schema => {
  let mongooseSchema = new mongoose.Schema(schema,
    {
      timestamps: true,
      id,
      _id: id,
      ...optional,
    }
  );

  mongooseSchema
    .set('toObject', { virtuals: true })
    .set('toJSON', { virtuals: true });

  mongooseSchema.plugin(mongooseHidden({
    defaultHidden: {
      password: true,
    },
  }));

  mongooseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
  });

  return mongooseSchema;
};
