export namespace ValidateError {
  export class RequiredFieldError extends Error {
    constructor() {
      super('Campo Obrigatório')
      this.name = 'RequiredFieldError'
    }
  }

  export class InvalidFieldError extends Error {
    constructor() {
      super('Valor inválido')
      this.name = 'InvalidFieldError'
    }
  }
}
