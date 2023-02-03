import type { HttpRequest, HttpResponse, Controller, EmailValidator } from '../protocols'
import { MIssingParamError, InvalidParamError } from '../errors'
import { badRequest, serverError } from '../helpers/http-helper'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      // validação dos campos obrigatórios
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MIssingParamError(field))
        }
      }

      const { email, password, passwordConfirmation } = httpRequest.body

      // validando se o password e o passwordConfirmation são diferentes
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      // validando se o email é válido
      const isValid = this.emailValidator.invalid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
    } catch (error) {
      return serverError()
    }
  }
}
