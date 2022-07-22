import { Account, AccountProps } from "../../../domain/";
import { IAccountRepository } from "../../../domain/repository/account-repository";

export class CreateAccountUseCase {
  constructor(private readonly accountRepository: IAccountRepository) {}

  async execute(accountProps: AccountProps): Promise<Account> {
    const account = Account.create(accountProps);
    await this.accountRepository.save(account);
    return account;
  }
}