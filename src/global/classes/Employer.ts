export default class Employer {
  constructor(
    private _name: string,
    private _cpf: string,
    private _address: string,
    private _occupation: string
  ) {}

  get name() {
    return this._name
  }

  get adress() {
    return this._address
  }

  get cpf() {
    return this._cpf
  }

  get occupation() {
    return this._occupation
  }
}
