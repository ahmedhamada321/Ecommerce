import express from "express";
import connectDB from "./db/Connecion.js";
import userRouter from "./modules/user/user.routes.js";
import subcategoryRouter from "./modules/subCategory/subCategory.routes.js";
import categoryRouter from "./modules/category/category.routes.js";
import { golbalErrorhandling } from "./utils/errorHandling.js";
import brandRouter from "./modules/brand/brand.routes.js";
import ProductRouter from "./modules/product/product.routes.js";
const applyMiddlewares = (app, express) => {
  app.use(express.json());
  app.use(userRouter);
  app.use(categoryRouter);
  app.use(subcategoryRouter);
  app.use(brandRouter);
  app.use(ProductRouter);
  

  app.all("*", (req, res, next) => {
    // creat error and sand it to error Handling
    const err = new Error(`can't find this route ${req.originalUrl}`);
    next(err);
  });
  app.use(golbalErrorhandling);
};

const bootstrap = async (app, express) => {
  await connectDB();

  applyMiddlewares(app, express);
};

export default bootstrap;
