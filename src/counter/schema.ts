import mongooseSchema from 'src/core/util/mongooseSchema';

export const counterSchema = {
  title: String,
  number: String,
};

export const CounterSchema = mongooseSchema(counterSchema);
