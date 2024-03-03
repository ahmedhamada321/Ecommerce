import { Router } from "express";
import {
  getBrands,
  getSpecificBrand,
  createBrand,
  updateBrand,
  deleteBrand,
} from "./controller/brand.js";
import { validtionSchema } from "../../middlewares/validateSchema.js";
import {
  createBrandSchame,
  updateBrandSchame,
  getBrandSchame,
  getBrandsSchema,
  deleteBrandSchame,
} from "../../validation/validateBrandSchema.js";
const router = Router();
router.get("/brand", validtionSchema(getBrandsSchema), getBrands);
router.get(
  "/brand/specific",
  validtionSchema(getBrandSchame),
  getSpecificBrand
);
router.post(
  "/brand",
  validtionSchema(createBrandSchame),
  validtionSchema(),
  createBrand
);
router.put("/brand", validtionSchema(updateBrandSchame), updateBrand);
router.delete("/brand", validtionSchema(deleteBrandSchame), deleteBrand);

export default router;
