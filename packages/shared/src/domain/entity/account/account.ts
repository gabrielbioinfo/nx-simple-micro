/* eslint-disable @typescript-eslint/ban-ts-comment */

import Entity from "../unique-entity/unique-entity";

export class AccountProps{
  constructor(public name: string){};
}

export class Account extends Entity<AccountProps>{
  
  public static create(name: string): Account{
    return new this(new AccountProps(name));
  }

  public changeName(name: string): void{
    this.props.name = name;
  }

}