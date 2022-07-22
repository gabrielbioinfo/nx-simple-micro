import { Account } from "../../../../domain/entity/account/account";
import { InMemoryRepository } from "../in-memory/in-memory-repository";

export class AccountRepositoryInMemory extends InMemoryRepository<Account>{}