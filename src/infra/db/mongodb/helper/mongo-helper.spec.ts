import { MongoHelper as sut } from './mongo-helper'

describe('Mongo Helper', () => {
  // teste para garantir que se a conecção com o banco
  // de dados cair o usuário sera reconectado
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconect if mongo db is down', async () => {
    let accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
    await sut.disconnect()
    accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
  })
})
