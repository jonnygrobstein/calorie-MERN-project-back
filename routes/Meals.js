import express from "express";
import mealsController from "../controllers/mealPlansController.js";

const mealRouter = express.Router();

mealRouter.get("/", mealsController.index);

export default mealRouter;
