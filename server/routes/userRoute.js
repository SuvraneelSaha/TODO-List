// define the end point of the app and map them to different controller methods

import express from "express";

import { create } from "../controller/userController.js";

// now we create an express router instance ;

const route = express.Router();

route.post("/user", create);

export default route;
