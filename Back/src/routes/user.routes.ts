import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { userRequestSchama } from "../validation";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";

export const userRoutes = Router();

userRoutes.post(
  "/register",
  schemaValidation(userRequestSchama),
  createUserController
);
