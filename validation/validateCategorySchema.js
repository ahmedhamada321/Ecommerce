import Joi from "joi";
const validateObgetId = (value, helper) => {
  return Types.ObjectId.isValid(value)
    ? value
    : helper.message("In-valed objectId");
};
export const createCategorySchame = Joi.object({
  name: Joi.string().required().max(30).min(2),
});

export const updateCategorySchame = Joi.object({
  name: Joi.string().required().max(30).min(2),
  id: Joi.string().custom(validateObgetId),
});

export const deleteCategorySchame = Joi.object({
  id: Joi.string().custom(validateObgetId),
});
export const getCategoriesScema = Joi.object({
  page: Joi.number().positive().optional(),
  limit: Joi.number().positive().optional(),
});
export const getCategorySchame = Joi.object({
  id: Joi.string().custom(validateObgetId),
});
