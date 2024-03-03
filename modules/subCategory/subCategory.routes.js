import { Router } from "express";
//mergeParams : allow us to access  parametars on ather router
const router = Router({ mergeParams: true });
import * as subCategoryController from "./controller/subCategory.js";
import {
  getSubCategoriesScema,
  createSubCategorySchame,
  updateSubCategorySchame,
  deleteSubCategorySchame,
  getSubCategorySchame,
} from "../../validation/validatesubCategorySchema.js";
import { validtionSchema } from "../../middlewares/validateSchema.js";

router.post(
  "/",
  validtionSchema(createSubCategorySchame),
  subCategoryController.setCategoryIdToBody,
  subCategoryController.createSubCategory
);
router.get(
  "/",
  validtionSchema(getSubCategoriesScema),
  subCategoryController.getAllSubCategories
);
router.get(
  "/",
  validtionSchema(getSubCategorySchame),
  subCategoryController.getSpecificSubCategory
);
router.put(
  "/",
  validtionSchema(updateSubCategorySchame),
  subCategoryController.updateSubCategory
);
router.delete(
  "/",
  validtionSchema(deleteSubCategorySchame),
  subCategoryController.deletesubCategory
);

export default router;
