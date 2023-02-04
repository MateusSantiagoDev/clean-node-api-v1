import bcrypt from 'bcrypt'
import type { Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    // vai encryptar o valor do parametro e recebe o salt
    const hash = await bcrypt.hash(value, this.salt)
    // retorna hash
    return hash
  }
}
