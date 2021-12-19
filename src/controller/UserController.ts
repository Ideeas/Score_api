import { Request, Response } from 'express'

import UserModel from '../Models/User'
import hasUnfilledField from '../global/functions/hasUnFilledField'

class UserController {
  async create(req: Request, res: Response) {
    if (hasUnfilledField(req.body)) {
      res.status(400).send({ error: 'Bad Request' })
    }

    const { name, email, password, address, cpf, occupation } = req.body
    try {
      const user = await UserModel.create({
        name,
        email,
        password,
        address,
        cpf,
        occupation,
      })

      res.status(201).send({ user })
    } catch (error) {
      res.status(500).send({ error: error })
    }
  }
}

export default new UserController()
