import { Types } from "mongoose";
export  const validateObgetId = (value, helper) => {
  return Types.ObjectId.isValid(value)
    ? value
    : helper.message("In-valed objectId");
};
 export default  validateObgetId;