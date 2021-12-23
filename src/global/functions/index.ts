import Utils from '../Abstract'
import bcrypt from 'bcrypt'
class Functions implements Utils {
  private saltRounds = 10
  hasUnfilledField(body: { [field: string]: any }): boolean {
    for (const field in body) {
      if (!body[field]) {
        return true
      }
    }
    return false
  }

  async hashPassword(userPassword: string): Promise<string> {
    const encryptedPassword = await bcrypt.hash(userPassword, this.saltRounds)
    return encryptedPassword
  }

  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hashedPassword)
    return result
  }
}

export default new Functions()
