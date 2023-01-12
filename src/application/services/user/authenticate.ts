import { AuthenticateUserUseCase } from "../../../domain/usecases/user/authenticate";
import { CryptProviderContract } from "../../contracts/crypt";
import { RepositoryContract } from "../../contracts/repository";
import { TokenContract } from "../../contracts/token";

export class AuthenticateUserService implements AuthenticateUserUseCase {
  constructor(
    private readonly repository: RepositoryContract,
    private readonly crypt: CryptProviderContract,
    private readonly tokenProvider: TokenContract
  ){}

  async execute(email: string, password: string) {
    
    const userAlreadyExists = await this.repository.findByEmail(email)
    if (!userAlreadyExists) throw new Error('Email or password invalid!')

    const isPasswordValid = this.crypt.compare(password, userAlreadyExists.password)
    if (!isPasswordValid) throw new Error('Email or password invalid!')

    const token = this.tokenProvider.sign({ email, password }, String(process.env.SECRET_KEY))
    return token
  }
}