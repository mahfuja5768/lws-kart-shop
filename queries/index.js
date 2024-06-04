import { categoryModel } from "@/models/category-model";
import { productModel } from "@/models/product-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

export async function getAllProducts() {
  const product = await productModel
    .find()
    .select([
      "name",
      "image",
      "price",
      "discount_price",
      "reviewsNumber",
      "topNew",
      "trending",
      "category",
    ])
    .lean();
  return replaceMongoIdInArray(product);
}

export async function getAllCategories() {
  const categories = await categoryModel.find().lean();
  return replaceMongoIdInArray(categories);
}

export async function getProductById(productId) {
  const hotel = await productModel.findById(productId).lean();

  return replaceMongoIdInObject(hotel);
}
