import * as bcrypt from 'bcrypt';
import mongooseSchema from 'src/core/util/mongooseSchema';

const AdminSchema = mongooseSchema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  avatar: String,
});

AdminSchema.pre('save', async function(next) {
  if (this.password.length > 0 && (this.isModified('password') || this.isNew)) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  return next();
});

AdminSchema.methods.comparePassword = async function(attempt: string): Promise<any> {
  return bcrypt.compare(attempt, this.password);
};

export default AdminSchema;
