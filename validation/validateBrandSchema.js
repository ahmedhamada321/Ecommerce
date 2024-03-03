import Joi from "joi";
const validateObgetId = (value, helper) => {
    return Types.ObjectId.isValid(value)
      ? value
      : helper.message("In-valed objectId");
  };
export const createBrandSchame = Joi.object({
  name: Joi.string().required().max(30).min(2),
});

export const updateBrandSchame = Joi.object({
  name: Joi.string().required().max(30).min(2),
  id: Joi.string().custom(validateObgetId),
});

export const deleteBrandSchame = Joi.object({
  id: Joi.string().custom(validateObgetId),
});
export const getBrandsSchema = Joi.object({
  page: Joi.number().positive().optional(),
  limit: Joi.number().positive().optional(),
});
export const getBrandSchame = Joi.object({
  id: Joi.string().custom(validateObgetId),
});
