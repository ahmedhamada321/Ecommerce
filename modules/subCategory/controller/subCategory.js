import { asyncHndler } from "../../../utils/errorHandling.js";
import SubCategory from "../../../db/models/subcoategort.js";
import slugify from "slugify";

export const setCategoryIdToBody = (req, res, next) => {
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};

export const createSubCategory = asyncHndler(async (req, res, next) => {
  const { name, category } = req.body;
  const subCategory = await SubCategory.create({
    name,
    category,
    slug: slugify(name),
  });
  res
    .status(201)
    .json({ message: "subcategory is created", data: subCategory });
});

export const getAllSubCategories = asyncHndler(async (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 5;
  const skip = (page - 1) * limit;
  const { categoryId } = req.params;

  let filterObject = {};
  if (categoryId) filterObject = { category: categoryId };
  const subCategory = await SubCategory.find(filterObject)
    .skip(skip)
    .limit(limit)

    .populate({
      path: "category",
      select: "name -_id",
    });

  if (subCategory.length == 0) {
    return next(
      new Error(`cannot find sub categories for this id ${categoryId}`)
    );
  }
  res
    .status(200)
    .json({ message: "all sub categories", page, data: subCategory });
});
export const getSpecificSubCategory = asyncHndler(async (req, res, next) => {
  const { id } = req.query;
  const subCategory = await SubCategory.findById(id);
  res.status(200).json({ message: "category", data: subCategory });
});

export const updateSubCategory = asyncHndler(async (req, res, next) => {
  const id = req.query.id;
  const { name, category } = req.body;
  const subCategory = await SubCategory.findByIdAndUpdate(
    { _id: id },
    { name, category, slug: slugify(name), new: true }
  );
  if (!subCategory) {
    return next(new Error(`cannot faind sub catogory for this id ${id}`));
  }
  res.status(201).json({ message: "sub category updated", subCategory });
});
export const deletesubCategory = asyncHndler(async (req, res) => {
  const id = req.query.id;
  const subcategory = await SubCategory.findByIdAndDelete(id);
  res.status(201).json({ message: "subCategory deleted" });
});
