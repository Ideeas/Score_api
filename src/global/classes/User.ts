import Employer from './Employer'

export default class User extends Employer {
  constructor(
    name: string,
    cpf: string,
    address: string,
    occupation: string,
    private _email: string,
    private _password: string
  ) {
    super(name, cpf, address, occupation)
  }

  get email() {
    return this._email
  }

  get password() {
    return this._password
  }
}
