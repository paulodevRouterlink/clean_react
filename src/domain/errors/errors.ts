export namespace Errors {
  export class InvalidCredentialsError extends Error {
    constructor() {
      super('Credencias inválida')
      this.name = 'InvalidCredentialError'
    }
  }

  export class UnexpectedError extends Error {
    constructor() {
      super('Algo de errado aconteceu. Tente novamente em breve')
      this.name = 'UnexpectedError'
    }
  }

  export class EmailInUseError extends Error {
    constructor() {
      super('Esse email já esta sendo utilizado')
      this.name = 'UnexpectedError'
    }
  }
}
