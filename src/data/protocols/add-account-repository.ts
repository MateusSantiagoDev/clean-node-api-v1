import type { AddAccountModel } from '../../domain/usecase/add-account'
import type { AccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
