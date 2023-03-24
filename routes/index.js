import express from "express";
import foodRouter from "./Food.js";
import mealRouter from "./Meals.js";
import userController from "../controllers/users.js";

const router = express.Router();

router.use("/foods", foodRouter);

router.use("/meals", mealRouter);

router.use("/users", userController);

export default router;
