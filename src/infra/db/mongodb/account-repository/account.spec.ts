import { MongoHelper } from '../helper/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
  // conectar com o banco durante os testes
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  // desconectar do banco depois dos testes
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  // entre um teste e outro esse metodo limpa as tabelas
  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('account')
    await accountCollection.deleteMany({})
  })

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository()
  }
  // teste de integração com sucesso
  test('Should return an account on sucess', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email@mail.com')
    expect(account.password).toBe('any_password')
  })
})
