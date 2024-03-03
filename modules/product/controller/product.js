import slugify from "slugify";
import Product from "../../../db/models/product.js";
import { asyncHndler } from "../../../utils/errorHandling.js";
import Category from "../../../db/models/category.js"

export const createProduct = asyncHndler(async (req, res, next) => {
  const { title, description, quantity, price, category, imageCover,subCategory } =
    req.body;

  const product = await Product.create({
    title,
    description,
    quantity,
    price,
    category,
    imageCover,
    subCategory,
    slug: slugify(title),
  });

  res.status(201).json({ message: "Product is created", data: product });
});
export const getProducts = asyncHndler(async (req, res, next) => {

  const category = await Category.exists({_id:id})
  console.log(category);

  const page = req.query.page || 1;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;
  const product = await Product.find()
    .populate({
      path: "category",
      select: "name  -_id",
    })
    .limit(limit)
    .skip(skip);
  res.status(200).json({ message: "proucts", page, data: product });
});

export const getSpecificproduct = asyncHndler(async (req, res, next) => {
  const id = req.query.id;
  const product = await Product.findById(id);
  if (!product) {
    next(new Error(` cannot find product for this id ${id} `));
  }
  res.status(200).json({ message: "category", data: product });
});

export const updateProduct = asyncHndler(async (req, res, next) => {
  const id = req.query.id;
  const { title, description, quantity, price, category, imageCover } =
    req.body;
  const product = await Product.findOneAndUpdate(
    { _id :id },
    {
      title,
      description,
      quantity,
      price,
      category,
      imageCover,
      slug: slugify(title),
    
    },
    {  new: true}
  );
  if (!product) {
    next(new Error(` cannot find prodct for this is ${id}`));
    return
  }
  res.status(200).json({ message: "proudct updated ", data: product });
});
export const deleteProduct = asyncHndler(async (req, res, next) => {
  const id = req.query.id;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    next(new Error(`cannt find product for this id ${id}`));
    return
  }
  res.status(200).json({ message: "product deleted " });
});
