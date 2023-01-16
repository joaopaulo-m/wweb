import { PrismaClient } from "@prisma/client"; 
import { RepositoryContract } from "../../application/contracts/repository";
import { UserDTO } from "../../application/contracts/user-dto";


class PrismaService implements RepositoryContract {

  async save(data: any): Promise<UserDTO> {
    const prisma = new PrismaClient();

    const dataSent = await prisma.user.create({
      data
    })
    return dataSent;
  }

  async findByEmail(email: string): Promise<UserDTO | null> {
    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
      where: { email }
    })

    return user;
  }
}

export { PrismaService };