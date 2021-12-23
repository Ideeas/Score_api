import User from '../global/classes/User'
import functions from '../global/functions'
import UserModel from '../Models/User'
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken'

interface AuthUserTypes {
  email: string
  password: string
}

export default class UserServices {
  private bcrypt = functions
  private jwt = jwt

  async create(user: User) {
    try {
      const hash = await this.bcrypt.hashPassword(user.password)

      const dbUser = await UserModel.create({
        name: user.name,
        email: user.email,
        password: hash,
        address: user.adress,
        cpf: user.cpf,
        occupation: user.occupation,
      })
      return dbUser
    } catch (error) {
      throw new Error(error as string)
    }
  }

  async encodeSession(secret: string): Promise<void> {}

  async auth({ email, password }: AuthUserTypes) {
    try {
      const user = await UserModel.findOne({
        where: {
          email,
          password,
        },
      })

      if (user === null) throw new Error("User don't exist")

      const isTheSamePassword = this.bcrypt.comparePassword(password, user.password)
      if (!isTheSamePassword) throw new Error('Invalid password')
    } catch (error) {
      throw new Error(`Internal server error ${error}`)
    }
  }
}
