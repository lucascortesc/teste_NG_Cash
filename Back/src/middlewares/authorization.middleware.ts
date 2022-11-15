import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

export const authorization = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Token não encontrado", 401);
  }

  const splitToken = token.split(" ");

  jwt.verify(
    splitToken[1],
    process.env.SECRET_KEY as string,
    (error, decoded) => {
      if (error) {
        throw new AppError("Token inválido", 401);
      }

      if (decoded) {
        res.locals.jwt = decoded;
      }
    }
  );
  next();
};
