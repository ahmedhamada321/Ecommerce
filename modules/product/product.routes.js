import Router from "express";
const router = Router();
import {
  createProduct,
  getProducts,
  getSpecificproduct,
  updateProduct,
  deleteProduct,
} from "./controller/product.js";
import { validtionSchema } from "../../middlewares/validateSchema.js";
import {
  getProductSchema,
  updateProductSchema,
  getProductsSchema,
  deleteProductSchame,
  creatproductSchema,
} from "../../validation/validateProductSchema.js";

router.post("/product", validtionSchema(creatproductSchema), createProduct);
router.get("/product", validtionSchema(getProductSchema), getProducts);
router.get(
  "/product/specific",
  validtionSchema(getProductsSchema),
  getSpecificproduct
);
router.put("/product", validtionSchema(updateProductSchema), updateProduct);
router.delete("/product", validtionSchema(deleteProductSchame), deleteProduct);

export default router;
