import { Request, Response } from "express";
import { getTransactionsService } from "../../services/transactions/getTransactions.service";

export const getTransactionsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.jwt.id;
  const params = req.query;

  const transactions = await getTransactionsService(userId, params);

  return res.json(transactions);
};
