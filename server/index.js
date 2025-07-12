import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();
// this will load the config from the dot env file

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

// connecting to the mongoDB now -

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

// express app connected now with the mongodb DB ;

// NOw we will be creating the folder structure ;

// after importing -- we have to mount the middleware

app.use("/api", route);
