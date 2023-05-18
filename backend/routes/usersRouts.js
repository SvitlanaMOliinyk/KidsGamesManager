import express from "express";
import { createUser, loginUser, updateUserFavorites } from "../controllers/userMethods.js";

const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.put("/update", updateUserFavorites);


export default userRouter;
