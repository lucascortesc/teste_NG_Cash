import { Request, Response } from "express";
import { loginService } from "../../services/sessions/login.service";

export const logionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const requestData = req.body;

  const token = await loginService(requestData);

  return res.json({ token });
};
