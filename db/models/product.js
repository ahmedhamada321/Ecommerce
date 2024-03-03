import { Types, Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: [30, "too long product title "],
      minlength: [2, "too short product title "],
    },
    slug: {
      type: String,
      required: true,
      lowerCase: true,
    },
    description: { 
      type: String,
      required: true,
      minlingth: [100, "product description too short  "],
      maxlength: [2000, "product descriotion too log "],
    },
    quantity: {
      type: Number,
      required: [true, "product quantity id required"],
    },
    sold: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      maxlength: [15, "product price too long "],
      trim: true,
    },
    priceAfterDiscount: {
      type: Number,
    },
    colors: [String],

    imageCover: {
      type: String,
      required: [true, "product image cover is required "],
    },
    images: [String],

    category: {
      type: Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategory: [
      {
        type: Types.ObjectId,
        ref: "SubCategory",
      },
    ],
    brand: {
      type: Types.ObjectId,
      ref: "Brand",
    },
    ratingAverage: {
      type: Number,
      min: [1, "Rating must be above or equel 1"],
      max: [5, "rating must be blwe or equel 5 "],
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);

const Product = model("Product", productSchema);

export default Product;
