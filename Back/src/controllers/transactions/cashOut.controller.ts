import { Request, Response } from "express";
import { cashOutService } from "../../services/transactions/cashOut.service";

export const cashOutController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.jwt.id;
  const target = req.body.username;
  const value = req.body.value;

  const transaction = await cashOutService(userId, target, value);

  return res.status(201).json(transaction);
};
