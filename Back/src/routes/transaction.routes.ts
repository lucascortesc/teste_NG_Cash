import { Router } from "express";
import { cashOutController } from "../controllers/transactions/cashOut.controller";
import { getTransactionsController } from "../controllers/transactions/getTransactions.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { transactionRequestSchema } from "../validation";

export const transactionsRoutes = Router();

transactionsRoutes.post(
  "",
  authorization,
  schemaValidation(transactionRequestSchema),
  cashOutController
);

transactionsRoutes.get("", authorization, getTransactionsController);
