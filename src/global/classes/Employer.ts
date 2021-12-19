export interface EmployerTypes {
  name: string
  cpf: string
  address: string
  occupation: string
}

export default class Employer {
  private name: string
  private cpf: string
  private address: string
  private occupation: string

  constructor({ name, cpf, address, occupation }: EmployerTypes) {
    this.name = name
    this.cpf = cpf
    this.address = address
    this.occupation = occupation
  }

  getName() {
    return this.name
  }

  getAdress() {
    return this.address
  }

  getCpf() {
    return this.cpf
  }

  getOcuppation() {
    return this.occupation
  }
}
