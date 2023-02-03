import type { HttpRequest, HttpResponse } from '../protocols/http'
import { MIssingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MIssingParamError('name'))
    } else {
      return badRequest(new MIssingParamError('email'))
    }
  }
}
