import { json } from "express";
import slugify from "slugify";
import Brand from "../../../db/models/brand.js";
import Brund from "../../../db/models/brand.js";
import { asyncHndler } from "../../../utils/errorHandling.js";

export const createBrand = asyncHndler(async (req, res, next) => {
  const { name } = req.body;
  const brand = await Brund.create({ name, slug: slugify(name) });
  res.status(201).json({ message: "brand created", data: brand });
});

export const getBrands = asyncHndler(async (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;

  const brands = await Brand.find().limit(limit).skip(skip);
  res.status(200).json({ message: "brands", page, data: brands });
});

export const getSpecificBrand = asyncHndler(async (req, res, next) => {
  const id = req.query.id;
  const brand = await Brand.findById(id);
  if (!brand) {
    next(new Error(`cannot find brand for this id ${id}`));
  }
  res.status(200).json({ message: "brand", data: brand });
});
export const updateBrand = asyncHndler(async (req, res, next) => {
  const { id } = req.query;
  const { name } = req.body;

  const brand = await Brund.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  res.status(200).json({ message: "brand updated ", data: brand });
});

export const deleteBrand = asyncHndler(async (req, res, next) => {
  const { id } = req.query;

  const brand = await Brand.findOneAndDelete({ _id: id });
  res.status(200).json({ message: "brand deleted" });
});
