//:root/modals/user.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  verified: boolean;
  image?: String;
  token?: string;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String },
  verified: { type: Boolean, default: false },
  token: { type: String },
});

export default mongoose.model<IUser>("User", userSchema);
