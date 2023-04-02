import express from "express";
import foodController from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.get("/", foodController.index);

foodRouter.get("/searchFood/", foodController.findFood);

foodRouter.get("/:id", foodController.findFoodById)

foodRouter.post("/addFood", foodController.create);

foodRouter.put("/:id", foodController.edit);

foodRouter.put("/updateFood/:food_name", foodController.updateFood)

foodRouter.delete("/:id", foodRouter.delete);

export default foodRouter;
