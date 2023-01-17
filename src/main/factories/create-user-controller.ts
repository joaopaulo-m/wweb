import { Controller } from "../../presentation/contracts/controller";
import { CreateUserService } from '../../application/services/user/create';
import { Repository } from '../../infrastructure/repositories/repository';
import { BcryptService } from '../../infrastructure/services/bcrypt';
import { PrismaService } from '../../infrastructure/services/prisma';
import { CreateUserController } from '../../presentation/controllers/user/create';

export const makeCreateUserController = (): Controller => {
  const crypt = new BcryptService();
  const orm = new PrismaService();
  const repository = new Repository(orm);
  const service = new CreateUserService(repository, crypt);
  return new CreateUserController(service);
} 