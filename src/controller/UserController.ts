import { Request, Response } from 'express'
import UserServices from '../services/UserService'

import User from '../global/classes/User'
import Functions from '../global/functions'

class UserController {
  constructor(private service: UserServices) {
    this.create = this.create.bind(this)
  }

  create(req: Request, res: Response) {
    if (Functions.hasUnfilledField(req.body)) {
      res.status(400).send({ error: 'Bad Request' })
    }

    const { name, email, password, address, cpf, occupation } = req.body
    const requestUser = new User(name, email, password, address, cpf, occupation)

    this.service
      .create(requestUser)
      .then(user => res.status(201).send(user))
      .catch(error => {
        res.status(500).send({ error })
      })
  }

  auth(req: Request, res: Response) {
    if (Functions.hasUnfilledField(req.body)) {
      res.status(400).send({ error: 'Bad Request' })
    }

    const { email, password } = req.body

    this.service.auth({ email, password })
  }
}

export default new UserController(new UserServices())
