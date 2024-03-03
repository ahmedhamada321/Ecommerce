import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });


const ondbdisconnect =()=>{}


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL_DB);


    console.log(`MongoDB Connected : ${conn.connection.host}`);


    conn.connection.on('disconnect', ondbdisconnect)
  
} catch (error) {
    // throw ( new  Error (`field connecton db ${error}`))
    console.error("Error while db conn " , error);
    process.exit(1)
  }
};
export default connectDB;
