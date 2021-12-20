import User from '../global/classes/User'
import UserModel from '../Models/User'
export default class UserServices {
  async create(user: User) {
    try {
      const dbUser = await UserModel.create({
        name: user.name,
        email: user.email,
        password: user.password,
        address: user.adress,
        cpf: user.cpf,
        occupation: user.occupation,
      })
      return dbUser
    } catch (error) {
      throw new Error(error as string)
    }
  }
}
