import { Request, Response } from 'express'

import UserModel from '../Models/User'
import User from '../global/classes/User'
import Functions from '../global/functions'

class UserController {
  async create(req: Request, res: Response) {
    if (Functions.hasUnfilledField(req.body)) {
      res.status(400).send({ error: 'Bad Request' })
    }
    const { name, email, password, address, cpf, occupation } = req.body
    const user = new User({ name, email, password, address, cpf, occupation })

    try {
      const dbUser = await UserModel.create({
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        address: user.getAdress(),
        cpf: user.getCpf(),
        occupation: user.getOcuppation(),
      })

      res.status(201).send({ user: dbUser })
    } catch (error) {
      res.status(500).send({ error: error })
    }
  }
}

export default new UserController()
