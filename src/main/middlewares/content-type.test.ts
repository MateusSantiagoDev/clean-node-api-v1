import request from 'supertest'
import { app } from '../config/app'

describe('Content Type Middleware', () => {
  // teste para garantir que todas as rotas vão retornar
  // um content type json como default
  test('Should return default content type as json', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send('')
    })
    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })

  // teste para garantir que se forçar um retorno xml ele
  // vai retornar xml
  test('Should return xml content type when forced', async () => {
    app.get('/test_content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })
    await request(app)
      .get('/test_content_type_xml')
      .expect('content-type', /xml/)
  })
})
