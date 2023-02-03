import type { HttpRequest, HttpResponse } from '../protocols/http'
import { MIssingParamError } from '../errors/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const result = httpRequest

    if (!result.body.name) {
      return {
        statusCode: 400,
        body: new MIssingParamError('name')
      }
    }
    if (!result.body.email) {
      return {
        statusCode: 400,
        body: new MIssingParamError('email')
      }
    }
    return result.body
  }
}
