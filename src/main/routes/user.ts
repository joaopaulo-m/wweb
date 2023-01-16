import express from 'express';
import { CreateUserService } from '../../application/services/user/create';
import { CreateUserController } from '../../infrastructure/controllers/user/create';
import { Repository } from '../../infrastructure/repositories/repository';
import { BcryptService } from '../../infrastructure/services/bcrypt';
import { PrismaService } from '../../infrastructure/services/prisma';

const router = express.Router();

const prismaOrm = new PrismaService();
const bcryptService = new BcryptService();
const repository = new Repository(prismaOrm);
const createUserUseCase = new CreateUserService(repository, bcryptService);
const createUserController = new CreateUserController(createUserUseCase);

router.post('/users', createUserController.handle)

export { router };