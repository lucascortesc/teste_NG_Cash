import { Request, Response } from "express";
import { getBalanceService } from "../../services/accounts/getBalance.service";

export const getBalanceController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.jwt.id;

  const account = await getBalanceService(userId);

  return res.json(account);
};
