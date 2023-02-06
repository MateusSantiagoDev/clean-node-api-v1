import request from 'supertest'
import { app } from '../config/app'

describe('Sigmup Routes', () => {
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
