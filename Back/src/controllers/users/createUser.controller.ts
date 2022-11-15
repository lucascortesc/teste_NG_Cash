import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.service";
import { plainToInstance } from "class-transformer";
import { Users } from "../../entities/users.entity";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const requestData = req.body;

  const createdUser = await createUserService(requestData);

  return res.status(201).json(plainToInstance(Users, createdUser));
};
