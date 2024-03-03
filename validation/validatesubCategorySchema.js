import Joi from "joi";
const validateObgetId = (value, helper) => {
    return Types.ObjectId.isValid(value)
      ? value
      : helper.message("In-valed objectId");
  };
  export const createSubCategorySchame = Joi.object({
  name: Joi.string().required().max(30).min(2),
  category: Joi.string().custom(validateObgetId),
});

export const updateSubCategorySchame = Joi.object({
  name: Joi.string().required().max(30).min(2),
  id: Joi.string().custom(validateObgetId),
  category: Joi.string().custom(validateObgetId),
});

export const deleteSubCategorySchame = Joi.object({
  id: Joi.string().custom(validateObgetId),
});
export const getSubCategoriesScema = Joi.object({
  page: Joi.number().positive().optional(),
  limit: Joi.number().positive().optional(),
  categoryId: Joi.string().custom(validateObgetId),
});
export const getSubCategorySchame = Joi.object({
  id: Joi.string().custom(validateObgetId),
});
