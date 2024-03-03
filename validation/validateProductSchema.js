import joi from "joi";
import Category from "../db/models/category.js";
import SubCategory from "../db/models/subcoategort.js";
import { Types } from "mongoose";
const validateObgetId = (value, helper) => {
  return Types.ObjectId.isValid(value)
    ? value
    : helper.message("In-valed objectId");
};
const validateCatgoryId = async (value, helper) => {
  return (await Category.exists({ _id: value }))
    ? value
    : helper.message(`Cannot found Category For This Id ${value}`);
};

const categoryInSubcategory = async (value, helper) => {
  const category = helper.state.ancestors[1].category;
  const findSubCategory = await SubCategory.findOne({ _id: value, category });

  if (!findSubCategory)
    return helper.message(`subcategoey not found for this id :${_id}`);

  return value;
};

export const creatproductSchema = joi.object({
  title: joi.string().required().max(30).min(2),
  slug: joi.string().optional(),
  description: joi.string().required().max(2000).min(10),
  quantity: joi.number().required(),
  price: joi.number(),
  priceAfterDiscount: joi.number().optional(),
  colors: joi.string(),
  imageCover: joi.string().required(),
  images: joi.string().optional(),
  category: joi
    .string()
    .custom(validateObgetId)
    .external(validateCatgoryId)
    .required(),
  subCategory: joi
    .array()
    .items(joi.custom(validateObgetId).external(categoryInSubcategory)),
  brand: joi.string().optional(),
  ratingAverage: joi.number().min(1).max(5).optional(),
  ratingQuantity: joi.number().default(0).optional(),
});
export const updateProductSchema = joi.object({
  id: joi.string().custom(validateObgetId),
  title: joi.string().required().max(30).min(2),
  slug: joi.string().optional(),
  description: joi.string().required().max(2000).min(10),
  quantity: joi.number().required(),
  price: joi.number(),
  priceAfterDiscount: joi.number().optional(),
  colors: joi.string(),
  imageCover: joi.string().required(),
  images: joi.string().optional(),
  category: joi
    .string()
    .custom(validateObgetId)
    .external(validateCatgoryId)
    .required(),
  subCategory: joi
    .array()
    .items(joi.custom(validateObgetId).external(categoryInSubcategory)),
  brand: joi.string().optional(),
  ratingAverage: joi.number().min(1).max(5).optional(),
  ratingQuantity: joi.number().default(0).optional(),
});

export const getProductSchema = joi.object({
  id: joi.string().custom(validateObgetId),
});

export const getProductsSchema = joi.object({
  page: joi.number().positive().optional(),
  limit: joi.number().positive().optional(),
});
export const deleteProductSchame = joi.object({
  id: joi.string().custom(validateObgetId),
});
