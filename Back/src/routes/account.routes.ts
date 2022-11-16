import { Router } from "express";
import { cashOutController } from "../controllers/accounts/cashOut.controller";
import { getBalanceController } from "../controllers/accounts/getBalance.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { transactionRequestSchema } from "../validation";

export const accountRoutes = Router();

accountRoutes.get("", authorization, getBalanceController);
accountRoutes.post(
  "/transactions",
  authorization,
  schemaValidation(transactionRequestSchema),
  cashOutController
);
