import express from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client'
import { CreateUserService } from '../../application/services/user/create';
import { CreateUserController } from '../../infrastructure/controllers/user/create';
import { PrismaService } from '../services/prisma';
import { BcryptService } from '../services/bcrypt';

const router = express.Router();
const prisma = new PrismaClient();
const bcryptService = new BcryptService(bcrypt);

const prismaService = new PrismaService(prisma);
const createUserUseCase = new CreateUserService(prismaService, bcryptService);
const createUserController = new CreateUserController(createUserUseCase);

router.post('/users', createUserController.handle)