import request from 'supertest'
import { app } from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helper/mongo-helper'

describe('Sigmup Routes', () => {
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
  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'mateus',
        email: 'mateus_santiago2.3@outlook.com',
        password: '1234',
        passwordConfirmation: '1234'
      })
      .expect(200)
  })
})
