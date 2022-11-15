import { Router } from "express";
import { getBalanceController } from "../controllers/accounts/getBalance.controller";
import { authorization } from "../middlewares/authorization.middleware";

export const accountRoutes = Router();

accountRoutes.get("", authorization, getBalanceController);
