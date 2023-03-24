import express from "express";
import foodRouter from "./Food.js";
import mealRouter from "./Meals.js";

const router = express.Router();

router.use("/foods", foodRouter);

router.use("/meals", mealRouter);

export default router;
