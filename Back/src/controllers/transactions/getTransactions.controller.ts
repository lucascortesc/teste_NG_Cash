import { Request, Response } from "express";
import { getTransactionsService } from "../../services/transactions/getTransactions.service";

export const getTransactionsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.jwt.id;

  const transactions = await getTransactionsService(userId);

  return res.json(transactions);
};
