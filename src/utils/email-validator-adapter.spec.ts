import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  // se a biblioteca do validator retornar false esse teste tbm retorna
  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.invalid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })

  // se a biblioteca do validator retornar true esse teste tbm retorna
  test('Should return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.invalid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })
})
