import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });
import bootstrap from "./index.routes.js";
// import connectDB from "./db/Connecion.js"
const port = process.env.PORT;
const app = express();

const start = async () => {
  await bootstrap(app, express);

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

start();
