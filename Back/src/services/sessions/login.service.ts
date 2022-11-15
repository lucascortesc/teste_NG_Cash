import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces";

export const loginService = async ({
  username,
  password,
}: IUserRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ username });

  if (!user) {
    throw new AppError("Usuário não encontrado", 404);
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Senha inválida", 400);
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );

  return token;
};
