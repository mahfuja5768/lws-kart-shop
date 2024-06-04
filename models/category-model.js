import mongoose, { Schema } from "mongoose";

const categorySchma = new Schema({
  image: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
});

export const categoryModel =
  mongoose.models.categories ?? mongoose.model("categories", categorySchma);
