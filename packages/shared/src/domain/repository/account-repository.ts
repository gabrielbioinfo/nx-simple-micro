import { Account } from "../entity";

export interface IAccountRepository {
  create(name: string): Promise<void>;
  update(id: string, name: string): Promise<void>;
  find(id: string): Promise<Account>;
  findAll(name: string): Promise<Account[]>;
  delete(id: string): Promise<void>;
}