import express from "express";
import foodController from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.get("/", foodController.index);

export default foodRouter;
