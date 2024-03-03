import { Router } from "express";
const router = Router();
import * as categoryControlr from "./controller/category.js";
import { param, validationResult } from "express-validator";
// import {getCategoryValidetor , createCategoryvalidetor}  from "../../utils/validators/categoryValidetor.js"
import subcategoryRouter from "../subCategory/subCategory.routes.js";
import { validtionSchema } from "../../middlewares/validateSchema.js";
import {
  createCategorySchame,
  getCategoriesScema,
  getCategorySchame,
  updateCategorySchame,
  deleteCategorySchame,
} from "../../validation/validateCategorySchema.js";

router.use("/:categoryId/subCategories", subcategoryRouter);

router.post(
  "/category",
  validtionSchema(createCategorySchame),
  categoryControlr.createCategory
);
router.get(
  "/categories",
  validtionSchema(getCategoriesScema),
  categoryControlr.getAllCategory
);
router.get(
  "/category",
  validtionSchema(getCategorySchame),
  categoryControlr.getCategory
);
router.post(
  "/updateCategory",
  validtionSchema(updateCategorySchame),
  categoryControlr.updateCategory
);
router.delete(
  "/category",
  validtionSchema(deleteCategorySchame),
  categoryControlr.deleteCategory
);

export default router;
