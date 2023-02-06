import request from 'supertest'
import { app } from '../config/app'

describe('CORS Middleware', () => {
  // teste para liberar o cors para q qualquer
  // servidor consiga acessar a aplicação
  test('Should enable CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      // aceitando requisição de qualquer origem
      .expect('acess-control-allow-origin', '*')
      // aceitando requisição de qualquer metodo
      .expect('acess-control-allow-methods', '*')
      // aceitando requisição de qualquer cabeçalhos
      .expect('acess-control-allow-headers', '*')
  })
})
