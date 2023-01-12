import { Prisma } from ".prisma/client";
import { PrismaClient } from "@prisma/client";
import { RepositoryContract } from "../../application/contracts/repository";
import { User } from "../../domain/entities/user";

export class PrismaService implements RepositoryContract {
  constructor(
    private prisma: any
  ){}

  async save({
    email,
    name,
    password,
    webhooks
  }: User) {
    this.prisma = new PrismaClient();
    
    const user = await this.prisma.user.save({
      email,
      name,
      password,
      webhooks
    });

    return user;
  }

  async findByEmail(email: string) {
    this.prisma = new PrismaClient();

    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    })

    return user;
  }
} 