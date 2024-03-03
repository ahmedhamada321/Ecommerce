import { Schema,model } from "mongoose";
const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength:3 ,
      maxlength:50
    },
    slug:{
        type : String ,
        lowercase : true 
    },
    image:{
        type : String
        
    }
  },
  {
    timestamps: true,
  }
);

const Category = model("Category", categorySchema)

export default Category 
