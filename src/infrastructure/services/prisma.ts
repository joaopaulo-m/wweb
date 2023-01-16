import { PrismaClient } from "@prisma/client"; 
import { RepositoryContract } from "../../application/contracts/repository";


class PrismaService implements RepositoryContract {

  async save(data: any) {
    const prisma = new PrismaClient();

    const dataSent = await prisma.user.create({
      data
    })
    return dataSent;
  }

  async findByEmail(email: string) {
    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
      where: { email }
    })

    return user;
  }
}

export { PrismaService };