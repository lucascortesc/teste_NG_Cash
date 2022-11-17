import { Request, Response } from "express";
import { retrieveUserService } from "../../services/users/retrieveUser.service";
import { plainToInstance } from "class-transformer";
import { Users } from "../../entities/users.entity";

export const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.jwt.id;

  const user = await retrieveUserService(userId);

  return res.json(plainToInstance(Users, user));
};
