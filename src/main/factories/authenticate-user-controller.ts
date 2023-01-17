import { Controller } from "../../presentation/contracts/controller";
import { AuthenticateUserService } from "../../application/services/user/authenticate";
import { Repository } from "../../infrastructure/repositories/repository";
import { BcryptService } from "../../infrastructure/services/bcrypt";
import { JwtService } from "../../infrastructure/services/jwt";
import { PrismaService } from "../../infrastructure/services/prisma";
import { AuthenticateUserController } from "../../presentation/controllers/user/authenticate"

export const makeAuthenticateUserController = (): Controller => {
  const jwt = new JwtService();
  const bcrypt = new BcryptService()
  const orm = new PrismaService()
  const repository = new Repository(orm)
  const service = new AuthenticateUserService(repository, bcrypt, jwt)
  return new AuthenticateUserController(service)
}