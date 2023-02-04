import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidator Adapter', () => {
  // se a biblioteca do validator retornar false esse teste tbm retorna
  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.invalid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
