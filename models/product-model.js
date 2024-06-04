import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    name: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  trending: {
    required: true,
    type: Boolean,
  },
  topNew: {
    required: true,
    type: Boolean,
  },
  discount_price: {
    required: true,
    type: String,
  },
  availability: {
    required: false,
    type: String,
  },
  brand: {
    required: false,
    type: String,
  },
  category: {
    required: false,
    type: String,
  },
  sku: {
    required: false,
    type: String,
  },
  rating: {
    required: false,
    type: Number,
  },
  quantities: {
    required: false,
    type: Number,
  },
  size: {
    required: false,
    type: Number,
  },
  reviewsNumber: {
    required: true,
    type: Number,
  },
  description: {
    required: false,
    type: String,
  },
  image: {
    required: true,
    type: Array,
  },
});

export const productModel =
  mongoose.models.products ?? mongoose.model("products", productSchema);
