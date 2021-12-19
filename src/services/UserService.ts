import User from '../global/classes/User'
import UserModel from '../Models/User'
export default class UserServices {
  async create(user: User) {
    try {
      const dbUser = await UserModel.create({
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        address: user.getAdress(),
        cpf: user.getCpf(),
        occupation: user.getOcuppation(),
      })
      return dbUser
    } catch (error) {
      throw new Error(error as string)
    }
  }
}
