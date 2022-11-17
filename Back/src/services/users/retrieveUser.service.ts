import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { IRetrieveUser } from "../../interfaces";

export const retrieveUserService = async (
  userId: string
): Promise<IRetrieveUser> => {
  const userRepository = AppDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("Usuário não encontrado", 404);
  }

  return user;
};
