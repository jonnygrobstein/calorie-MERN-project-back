import express from "express";
import foodController from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.get("/", foodController.index);
foodRouter.post('/addFood', foodRouter.create)
foodRouter.put('/:id', foodRouter.edit)
foodRouter.delete('/:id', foodRouter.delete)

export default foodRouter;
