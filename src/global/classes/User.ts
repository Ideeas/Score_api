import Employer, { EmployerTypes } from './Employer'

interface UserTypes extends EmployerTypes {
  email: string
  password: string
}

export default class User extends Employer {
  private email: string
  private password: string

  constructor({ name, cpf, address, occupation, email, password }: UserTypes) {
    super({ name, cpf, address, occupation })
    this.email = email
    this.password = password
  }

  getEmail() {
    return this.email
  }

  getPassword() {
    return this.password
  }
}
