import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { userRequestSchama } from "../validation";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { logionController } from "../controllers/session/login.controller";
import { retrieveUserController } from "../controllers/users/retrieveUser.controller";
import { authorization } from "../middlewares/authorization.middleware";

export const userRoutes = Router();

userRoutes.post(
  "/register",
  schemaValidation(userRequestSchama),
  createUserController
);

userRoutes.post("/login", logionController);
userRoutes.get("/user", authorization, retrieveUserController);
