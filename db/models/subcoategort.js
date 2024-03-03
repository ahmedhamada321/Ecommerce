import { Schema, model, Types } from "mongoose";
const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    slug: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);
const SubCategory = model("SubCategory", subCategorySchema);
export default SubCategory;

