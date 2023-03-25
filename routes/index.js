import express from "express";
import foodRouter from "./Food.js";
import mealRouter from "./Meals.js";
import userRouter from "./Users.js";

const router = express.Router();

router.use("/foods", foodRouter);

router.use("/meals", mealRouter);

router.use("/users", userRouter);

export default router;
