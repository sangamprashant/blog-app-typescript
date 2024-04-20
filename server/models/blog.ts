//:root/modals/blog.ts
import mongoose, { Document, Schema, model } from "mongoose";

export interface IBlog extends Document {
  title?: String;
  content: String;
  user: Object;
}

const blogSchema: Schema = new Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
      require: true,
    },
    user: {
      ref: "user",
      type: model,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBlog>("Blog", blogSchema);
