import { Schema, model } from 'mongoose';

const CategorySchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

export default model('Category', CategorySchema);
