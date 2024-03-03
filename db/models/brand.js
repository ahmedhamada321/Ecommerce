import { Schema, Types, model } from "mongoose";

const brandSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "the name for brand is requierd "],
      unique: [true, "this brand is unique "],
      maxlength: [30, "too long name "],
      minlength: [2, "too short name "],
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Brand = model("Brand", brandSchema);
export default Brand;
