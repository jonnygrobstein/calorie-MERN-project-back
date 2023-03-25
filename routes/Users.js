import express from "express";
import usersController from "../controllers/usersController.js";

const userRouter = express.Router();

userRouter.post("/signup", usersController.signup);

export default userRouter;
