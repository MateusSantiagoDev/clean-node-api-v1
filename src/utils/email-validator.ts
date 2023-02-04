import type { EmailValidator } from '../presentation/protocols/email-validator'

export class EmailValidatorAdapter implements EmailValidator {
  invalid (email: string): boolean {
    return false
  }
}