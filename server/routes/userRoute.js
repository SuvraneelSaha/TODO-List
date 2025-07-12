// define the end point of the app and map them to different controller methods

import express from "express";

import { create, getAllUsers, getUserByID, update } from "../controller/userController.js";

// now we create an express router instance ;

const route = express.Router();

route.post("/user", create);

route.get("/users", getAllUsers);

route.get("/user/:id",getUserByID);

route.put("/update/user/:id",update);

// put - for updating 

export default route;
