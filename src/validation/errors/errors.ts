export namespace ValidateError {
  export class RequiredFieldError extends Error {
    constructor() {
      super('Campo Obrigatório')
      this.name = 'RequiredFieldError'
    }
  }

  export class InvalidFieldError extends Error {
    constructor() {
      super('Valor invalido')
      this.name = 'InvalidFieldError'
    }
  }
}
