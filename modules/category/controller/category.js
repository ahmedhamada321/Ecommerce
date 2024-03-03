import Category from "../../../db/models/category.js";
import slugify from "slugify";
import { asyncHndler } from "../../../utils/errorHandling.js";
import { query } from "express";

export const createCategory = asyncHndler(async (req, res, next) => {
  const { name } = req.body;
  const category = await Category.create({ name, slug: slugify(name) });
  res.json({ message: "category careateda", data: category });
});

export const getAllCategory = asyncHndler(async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;

  const category = await Category.find({}).skip(skip).limit(limit);
  res
    .status(200)

    .json({
      message: "all categorys",
      resultes: category.length,
      page,
      data: category,
    });
});
export const getCategory = asyncHndler(async (req, res, next) => {
  const id = req.query.id;
  const category = await Category.findById(id);
  if (!category) {
    res.status(404).json({ message: `no category for this is id ${id}` });
  }
  res.status(202).json({ message: "done", data: category });
});

export const updateCategory = asyncHndler(async (req, res) => {
  const id = req.query.id;
  const { name } = req.body;
  const category = await Category.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!category) {
    res.status(404).json({ message: `no category for this is id ${id}` });
  }
  res.status(201).json({ message: "category updated", category });
});

export const deleteCategory = asyncHndler(async (req, res) => {
  const id = req.query.id;
  const category = await Category.findByIdAndDelete(id);
  res.status(201).json({ message: "category deleted" });
});
