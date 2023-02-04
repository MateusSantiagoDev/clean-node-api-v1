import type { AddAccount, AccountModel, AddAccountModel, Encrypter, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository
  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    // cryptografia do password
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    // adição de uma nova conta
    const account = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    // retornando o valor correto
    return account
  }
}
